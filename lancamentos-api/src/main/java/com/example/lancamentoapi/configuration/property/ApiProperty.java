package com.example.lancamentoapi.configuration.property;


import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "launchs")
public class ApiProperty {

    @Setter
    @Getter
    private String originPermitted = "http://localhost:8000";

    @Getter
    private final Security security = new Security();

    public static class Security{

        @Setter
        @Getter
        private  boolean enableHttps;
    }
}
