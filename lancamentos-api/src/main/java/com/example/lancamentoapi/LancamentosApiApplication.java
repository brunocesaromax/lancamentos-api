package com.example.lancamentoapi;

import com.example.lancamentoapi.configuration.property.ApiProperty;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EnableConfigurationProperties(ApiProperty.class)
public class LancamentosApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(LancamentosApiApplication.class, args);
	}
}
