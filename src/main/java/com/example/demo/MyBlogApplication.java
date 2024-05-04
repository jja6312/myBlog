package com.example.demo;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Collections;
import java.util.List;

@SpringBootApplication
@ComponentScan(basePackages = { "com.example.demo", "devlog.*", "studyTime.*", "skill.*", "memo.*", "project.*",
		"config" })
@EntityScan(basePackages = { "devlog.bean", "studyTime.bean", "skill.bean", "memo.bean", "project.bean" })
@MapperScan(basePackages = { "studyTime.mapper", "skill.mapper", "devlog.mapper" })
@EnableJpaRepositories(basePackages = { "devlog.repository", "studyTime.repository", "skill.repository",
		"memo.repository", "project.repository" })
public class MyBlogApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyBlogApplication.class, args);
	}

	// CORS설정
	// @Bean
	// CorsConfigurationSource corsConfigurationSource() {
	// return request -> {
	// CorsConfiguration config = new CorsConfiguration();
	// config.setAllowedHeaders(Collections.singletonList("*"));
	// config.setAllowedOrigins(List.of("http://43.203.18.91:3000",
	// "http://law10000hours.com.s3-website.ap-northeast-2.amazonaws.com"));
	// config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH",
	// "OPTIONS"));
	// // config.setAllowCredentials(true);
	//
	// UrlBasedCorsConfigurationSource source = new
	// UrlBasedCorsConfigurationSource();
	// source.registerCorsConfiguration("/**", config); // 모든 경로에 CORS 적용
	// return config;
	// };
	// }
}
