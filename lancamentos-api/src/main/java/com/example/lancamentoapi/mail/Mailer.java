package com.example.lancamentoapi.mail;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.util.List;

@Component
@RequiredArgsConstructor
public class Mailer {

    private final JavaMailSender mailSender;

    //Usar para simular emails na aplicação
    /*@EventListener
    private void test(ApplicationReadyEvent event) {
        this.sendEmail("brunocesarjavadevtest@gmail.com",
                Collections.singletonList("brunocesar.oc96@gmail.com"),
                "Testando", "Olá!<br/>Teste ok.");
        System.out.println("TERMINADO O ENVIO DE EMAIL...");
    }*/

    public void sendEmail(String from, List<String> targets, String subject, String message) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, "UTF-8");

        try {
            helper.setFrom(from);
            helper.setTo(targets.toArray(new String[0]));
            helper.setSubject(subject);
            helper.setText(message, true);

            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            throw new RuntimeException("Erro ao enviar email", e);
        }
    }
}
