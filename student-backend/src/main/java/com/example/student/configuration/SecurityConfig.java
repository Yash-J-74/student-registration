package com.example.student.configuration;

import com.example.student.security.JwtAuthenticationEntryPoint;
import com.example.student.security.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {
    @Autowired
    private JwtAuthenticationEntryPoint point;
    @Autowired
    private JwtAuthenticationFilter filter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf().disable()
                .cors().disable()
                .authorizeRequests(authorize -> authorize
                        .mvcMatchers("/student/**").authenticated()
                        .mvcMatchers("/auth/login").permitAll()
                        .anyRequest().authenticated()
                )
                .exceptionHandling()
                .authenticationEntryPoint(point)
                .and()
                .addFilterBefore(filter, UsernamePasswordAuthenticationFilter.class);



        return http.build();
    }
}
