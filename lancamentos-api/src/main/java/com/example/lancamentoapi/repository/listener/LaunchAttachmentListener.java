package com.example.lancamentoapi.repository.listener;

import com.example.lancamentoapi.LancamentosApiApplication;
import com.example.lancamentoapi.model.Launch;
import com.example.lancamentoapi.storage.S3;
import org.springframework.util.StringUtils;

import javax.persistence.PostLoad;

public class LaunchAttachmentListener {

    @PostLoad
    public void postLoad(Launch launch) {
        if (StringUtils.hasText(launch.getAttachment())){
            S3 s3 = LancamentosApiApplication.getBean(S3.class);
            launch.setUrlAttachment(s3.configureUrl(launch.getAttachment()));
        }
    }
}
