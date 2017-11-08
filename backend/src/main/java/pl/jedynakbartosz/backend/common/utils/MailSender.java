package pl.jedynakbartosz.backend.common.utils;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class MailSender {

  @Scheduled(fixedRate = 100000)
  public void mailSender() {

    long now = System.currentTimeMillis() / 10000;
    System.out.println("Check if there any mail to send" + now);
  }
}
