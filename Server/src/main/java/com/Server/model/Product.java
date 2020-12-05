package com.Server.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "produk")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "size")
	private String size;
	@Column(name = "jenis")
	private String jenis;
	@Column(name = "deskripsi")
	private String deskripsi;
	@Column(name = "jmlbarang")
	private int jmlbarang;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getJenis() {
		return jenis;
	}

	public void setJenis(String jenis) {
		this.jenis = jenis;
	}

	public String getDeskripsi() {
		return deskripsi;
	}

	public void setDeskripsi(String deskripsi) {
		this.deskripsi = deskripsi;
	}

	public int getJmlbarang() {
		return jmlbarang;
	}

	public void setJmlbarang(int jmlbarang) {
		this.jmlbarang = jmlbarang;
	}

	public Product(String size, String jenis, String deskripsi, int jmlbarang) {
		this.size = size;
		this.jenis = jenis;
		this.deskripsi = deskripsi;
		this.jmlbarang = jmlbarang;
	}

	public Product() {
	}

}
