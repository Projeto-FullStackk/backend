import { MailerService } from '@nestjs-modules/mailer';
import { InternalServerErrorException, Injectable } from '@nestjs/common';
import { SendEmailDto } from 'src/modules/user/dto/send-email.dto';
import * as Mailgen from 'mailgen';

const mailGenerator = new Mailgen({
  theme: 'salted',
  product: {
    name: 'Motors shop',
    link: 'http://localhost:3000',
    logo: 'https://github.com/Projeto-FullStackk.png',
    logoHeight: '30px',
  },
});

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail({ to, subject, text }: SendEmailDto) {
    await this.mailerService
      .sendMail({ to, subject, html: text })
      .then(() => console.log('Email send with success'))
      .catch((error) => {
        console.log(error);
        throw new InternalServerErrorException('Error sending email');
      });
  }

  resetPassword(userEmail: string, userName: string, resetToken: string) {
    const email = {
      body: {
        name: userName,
        greeting: 'Olá',
        intro:
          'Você recebeu este e-mail porque uma solicitação de redefinição de senha para sua conta foi solicitada.',
        action: {
          instructions: 'Clique no botão abaixo para redefinir sua senha',
          button: {
            color: '#4529E6',
            text: 'Redefinir senha',
            link: `http://localhost:3000/resetPassword/${resetToken}`,
          },
        },
        outro:
          'Se você não solicitou uma redefinição de senha, nenhuma outra ação será necessária de sua parte.',
      },
    };

    const emailBody = mailGenerator.generate(email);

    const emailTemplate = {
      to: userEmail,
      subject: 'Redefinição de Senha',
      text: emailBody,
    };

    return emailTemplate;
  }
}
