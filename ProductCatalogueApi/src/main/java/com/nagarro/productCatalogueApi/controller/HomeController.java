package com.nagarro.productCatalogueApi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.nagarro.productCatalogueApi.model.Product;
import com.nagarro.productCatalogueApi.model.User;
import com.nagarro.productCatalogueApi.services.ProductService;
import com.nagarro.productCatalogueApi.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {

	@Autowired
	private UserService userService;

	@Autowired
	private ProductService productService;

	@PostMapping("api/v1/register")
	public ResponseEntity<User> registerUser(@RequestBody User user) throws Exception {
		String tempEmailId = user.getEmail();
		if (tempEmailId != null && !" ".equals(tempEmailId)) {
			User existingUser = userService.findUser(tempEmailId);
			if (existingUser != null) {
				throw new Exception("User with" + tempEmailId + "already Exist");
			}
		}
		return new ResponseEntity<User>(userService.registerUser(user), HttpStatus.CREATED);
	}

	@PostMapping("api/v1/login")
	public ResponseEntity<User> loginUser(@RequestBody User user) throws Exception {
		User validUser = null;
		validUser = userService.validateUser(user.getEmail(), user.getPassword());
		if (validUser == null) {
			throw new Exception("Invalid User");
		}
		return new ResponseEntity<User>(validUser, HttpStatus.OK);
	}

	@GetMapping("api/v1/search/{keyword}")
	public ResponseEntity<List<Product>> searchProduct(@PathVariable("keyword") String keyword) throws Exception {
		List<Product> product = productService.findProduct(keyword);
		if (product.size() == 0) {
			throw new Exception("No Match Found");
		}
		return ResponseEntity.ok(product);
	}

}
