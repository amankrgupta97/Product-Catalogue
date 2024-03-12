package com.nagarro.productCatalogueApi.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nagarro.productCatalogueApi.model.Product;
import com.nagarro.productCatalogueApi.repository.ProductRepository;
import com.nagarro.productCatalogueApi.services.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductRepository productRepository;

	@Override
	public List<Product> findProduct(String keyword) {
		List<Product> product = productRepository.findByName(keyword);
		if (product.size() == 0) {
			product = productRepository.findByBrand(keyword);
			if (product.size() != 0) {
				return product;
			} else if (product.size() == 0) {
				product = productRepository.findByCode(keyword);
				if (product.size() != 0) {
					return product;
				}
			}
		}
		return product;
	}

}
