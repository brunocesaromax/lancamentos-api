package com.example.lancamentoapi;

import com.example.lancamentoapi.configuration.property.ApiProperty;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(ApiProperty.class)
public class LancamentosApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(LancamentosApiApplication.class, args);
	}
}
