const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",//conf del servidir
  port: 587,//
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "ayte2024@outlook.com",
    pass: "12345678ayte",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Ganar O Morir👻" <ayte2024@outlook.com>', // sender address
    to: "sebastianquinayas12533@gmail.com", // list of receivers
    subject: "Correo Enviado ✔", // asunto
    html: `
<html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #00ff00;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #00ff00;

        }
      </style>
    </head>

    <body>
      <div class="container">
        <h4>Correo de prueba</h4>
        <p>Hola, este es un correo de prueba enviado desde Node.js usando nodemailer.</p>
        <p>Puedes incluir cualquier contenido HTML aquí, como imágenes, enlaces, listas, etc.</p>
      </div>
    </body>
  </html>
`,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
