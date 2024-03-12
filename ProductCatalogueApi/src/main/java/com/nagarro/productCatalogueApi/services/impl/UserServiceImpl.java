package com.nagarro.productCatalogueApi.services.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.productCatalogueApi.model.User;
import com.nagarro.productCatalogueApi.repository.UserRepository;
import com.nagarro.productCatalogueApi.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User registerUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public User validateUser(String email, String password) {
		User user=userRepository.findByEmailAndPassword(email, password);
		return user;
	}

	@Override
	public User findUser(String email) {
		return userRepository.findByEmail(email);
	}

}
