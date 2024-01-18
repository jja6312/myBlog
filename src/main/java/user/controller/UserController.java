package user.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class UserController {
	
	@PostMapping(value="/user/list")
	public void userList() {
		System.out.println("hello");
	}
	@GetMapping(value="/hello")
	public void hello() {
		System.out.println("hello");
	}
	
	
	

}
