package com.nagarro.productCatalogueApi.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nagarro.productCatalogueApi.model.Product;

public interface ProductRepository extends JpaRepository<Product,String>{
	
	List<Product> findByCode(String code);
	List<Product> findByName(String name);
	List<Product> findByBrand(String brand);
	
	
	

}
