package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.example.demo", "user.*", "devlog.*", "studyTime.*", "skill.*", "memo.*" })
@EntityScan(basePackages = { "user.bean", "devlog.bean", "studyTime.bean","skill.bean", "memo.bean" })
@MapperScan(basePackages = { "studyTime.mapper", "skill.mapper", "devlog.mapper"} )
@EnableJpaRepositories(basePackages = { "user.dao", "devlog.repository" , "studyTime.repository","skill.repository", "memo.repository" })
public class MyBlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyBlogApplication.class, args);
	}

}
