package com.example.lancamentoapi.configuration.property;


import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "launchs")
public class ApiProperty {

    @Setter
    @Getter
//    private String originPermitted = "http://localhost:8000";
    private String originPermitted;

    @Getter
    private final Security security = new Security();

    @Getter
    private final Mail mail = new Mail();

    public static class Security {

        @Setter
        @Getter
        private boolean enableHttps;
    }

    @Setter
    @Getter
    public static class Mail {

        private String host;
        private Integer port;
        private String username;
        private String password;
    }
}
