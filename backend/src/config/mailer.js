const nodemailer = require("nodemailer");
const nodemailerSendgrid = require("nodemailer-sendgrid");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const API_KEY = process.env.APYKEY_SENDGRID;

// ---Criando o transporter em ambiente de produção com o serviço do "Sendgrid"---
const createTrans = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: `${API_KEY}`,
    })
  );

  return transport;
};

const sendMail = async (migra) => {
  const transporter = createTrans();
  const info = await transporter.sendMail({
    from: '"CIARI" <ciaridobrasil@gmail.com>',
    to: `${migra.emailMigrante}`,
    subject: "Bem-vindo(a) ao CIARI!",
    html: `
    <h1>Olá, ${migra.nomeMigrante}! Bem-vindo(a) ao * CIARI *</h1>
    <h2>"Centro de Inclusão e Ajuda para Refugiados e Imigrantes"</h2>
    <p>
      Você agora faz parte da nossa Comunidade e pode contar com a gente em todo
      aquilo necessario com seu processo de integração no Brasil, referente a:
    </p>
    <ul>
      <li>Cursos de português,</li>
      <li>Legalização de documentos,</li>
      <li>Encaminhamento ao serviço de saúde,</li>
      <li>Encaminhamento laboral,</li>
      <li>Oficinas de empreendedorismo,</li>
      <li>Ajuda de alimentos.....</li>
    </ul>
    <p>
      Para ficar por dentro de nossas atividades, convidamos você entrar nosso grupo
      Whatsapp para receber as notificações de nossas jornadas.
    </p>
    <p>
      Entre já nosso grupo clicando no link
      <a href="https://bit.ly/371KAnZ" target="_blank" rel="noopener"
        >"Grupo whatsapp do CIARI"</a>
    </p>
    `,
  });
  console.log("Email enviado com Sucesso!");
  return;
};

exports.sendMail = (migra) => sendMail(migra);
