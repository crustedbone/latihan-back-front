package com.Server.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Server.model.Product;
import com.Server.repo.ProductRepo;
import com.Server.exception.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class ProductAPI {

	@Autowired
	private ProductRepo productRepo;

	// get all products
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		return productRepo.findAll();
	}
	
	// add new product
	@PostMapping("/products")
	public Product addProduct(@RequestBody Product pProduct) {
		return productRepo.save(pProduct);
	}
	
	// get product by id
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable int id){
		Product pProduct = productRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product with id :" + id + " is not exist"));
		return ResponseEntity.ok(pProduct);
	}
	
	// update product
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product productOld){
		Product productTemp = productRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product with id :" + id + " is not exist"));
		
		productTemp.setSize(productOld.getSize());
		productTemp.setJenis(productOld.getJenis());
		productTemp.setDeskripsi(productOld.getDeskripsi());
		productTemp.setJmlbarang(productOld.getJmlbarang());
		
		Product productNew = productRepo.save(productTemp);
		return ResponseEntity.ok(productNew);
	}
	
	// remove product
	@DeleteMapping("/products/{id}")
	public ResponseEntity<Map<String, Boolean>> removeProduct(@PathVariable int id){
		Product pProduct = productRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Product with id :" + id + " is not exist"));
		
		productRepo.delete(pProduct);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	} 

}
