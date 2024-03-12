package com.nagarro.productCatalogueApi.services;

import java.util.List;

import com.nagarro.productCatalogueApi.model.Product;

public interface ProductService {
	
	List<Product> findProduct(String keyword);

}
