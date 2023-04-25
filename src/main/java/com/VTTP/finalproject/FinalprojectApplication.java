package com.VTTP.finalproject;

import java.security.Principal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FinalprojectApplication {

	@GetMapping
	public String welcome() {
		return "Welcome to Google";
	}

	@GetMapping("/user")
	public Principal welcome(Principal principal) {
		System.out.println("username : " + principal.getName());
		return principal;
	}

	public static void main(String[] args) {
		SpringApplication.run(FinalprojectApplication.class, args);
	}
}