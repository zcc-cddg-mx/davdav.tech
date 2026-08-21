<?php
/**
 * contact.php — PHPMailer SMTP handler
 * Deploy alongside /out at the HostGator server root.
 * Destination: david.duarte@davdav.tech
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/vendor/phpmailer/phpmailer/src/Exception.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/phpmailer/src/SMTP.php';

header('Content-Type: application/json; charset=utf-8');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ── Honeypot check ─────────────────────────────────────────────────────────
$honeypot = $_POST['_honeypot'] ?? '';
if ($honeypot !== '') {
    // Silently accept — bots don't need a helpful error message
    http_response_code(200);
    echo json_encode(['success' => true]);
    exit;
}

// ── Sanitize inputs ────────────────────────────────────────────────────────
$name    = trim(strip_tags($_POST['name']    ?? ''));
$email   = trim(strip_tags($_POST['email']   ?? ''));
$company = trim(strip_tags($_POST['company'] ?? ''));
$message = trim(strip_tags($_POST['message'] ?? ''));

// ── Validate ───────────────────────────────────────────────────────────────
$errors = [];
if ($name === '')                          $errors[] = 'Name is required.';
if ($email === '')                         $errors[] = 'Email is required.';
elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Invalid email address.';
if ($message === '')                       $errors[] = 'Message is required.';
elseif (mb_strlen($message) < 10)          $errors[] = 'Message is too short.';

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ── PHPMailer ──────────────────────────────────────────────────────────────
$mail = new PHPMailer(true);

try {
    // Server settings — HostGator SMTP
    $mail->isSMTP();
    $mail->Host       = 'mail.davdav.tech';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'david.duarte@davdav.tech';
    $mail->Password   = getenv('SMTP_PASSWORD') ?: '';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    $mail->CharSet    = 'UTF-8';

    // Recipients
    $mail->setFrom('david.duarte@davdav.tech', 'davdav.tech Contact');
    $mail->addAddress('david.duarte@davdav.tech', 'Carlos David Duarte');
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New contact from davdav.tech' . ($company ? " — {$company}" : '');

    $companyLine = $company ? "<tr><td style='padding:4px 0;color:#64748B;font-size:13px;'>Company</td><td style='padding:4px 0 4px 16px;color:#0F172A;font-size:14px;'>" . htmlspecialchars($company) . "</td></tr>" : '';

    $mail->Body = "
<!DOCTYPE html>
<html lang='en'>
<head><meta charset='UTF-8'></head>
<body style='margin:0;padding:24px;background:#F8FAFC;font-family:Inter,Segoe UI,sans-serif;'>
  <div style='max-width:560px;margin:0 auto;background:#FFFFFF;border:1px solid #E2E8F0;border-radius:12px;overflow:hidden;'>
    <div style='background:#0078D4;padding:20px 24px;'>
      <p style='margin:0;color:#FFFFFF;font-size:14px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;'>New Contact Message</p>
      <p style='margin:4px 0 0;color:rgba(255,255,255,0.75);font-size:12px;'>davdav.tech</p>
    </div>
    <div style='padding:24px;'>
      <table style='width:100%;border-collapse:collapse;'>
        <tr><td style='padding:4px 0;color:#64748B;font-size:13px;'>Name</td><td style='padding:4px 0 4px 16px;color:#0F172A;font-size:14px;font-weight:600;'>" . htmlspecialchars($name) . "</td></tr>
        <tr><td style='padding:4px 0;color:#64748B;font-size:13px;'>Email</td><td style='padding:4px 0 4px 16px;color:#0078D4;font-size:14px;'><a href='mailto:" . htmlspecialchars($email) . "' style='color:#0078D4;'>" . htmlspecialchars($email) . "</a></td></tr>
        {$companyLine}
      </table>
      <hr style='border:none;border-top:1px solid #E2E8F0;margin:20px 0;'>
      <p style='margin:0 0 8px;color:#64748B;font-size:13px;'>Message</p>
      <p style='margin:0;color:#0F172A;font-size:14px;line-height:1.6;white-space:pre-wrap;'>" . htmlspecialchars($message) . "</p>
    </div>
    <div style='padding:16px 24px;background:#F8FAFC;border-top:1px solid #E2E8F0;'>
      <p style='margin:0;color:#94A3B8;font-size:11px;'>Sent from the contact form at davdav.tech</p>
    </div>
  </div>
</body>
</html>";

    $mail->AltBody = "New contact from davdav.tech\n\nName: {$name}\nEmail: {$email}" . ($company ? "\nCompany: {$company}" : '') . "\n\nMessage:\n{$message}";

    $mail->send();

    http_response_code(200);
    echo json_encode(['success' => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail could not be sent.']);
}
