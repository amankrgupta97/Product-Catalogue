package com.nagarro.productCatalogueApi.services;

import com.nagarro.productCatalogueApi.model.User;

public interface UserService {
	
	User registerUser(User user);
	User validateUser(String email,String password);
	User findUser(String email);

}
