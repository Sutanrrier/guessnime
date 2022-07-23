package com.sutanrrier.guessnime.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_anime_cover")
public class AnimeCover implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String urlCover;
	@Column(nullable = false)
	private String urlCoverNivel0;
	@Column(nullable = false)
	private String urlCoverNivel1;
	@Column(nullable = false)
	private String urlCoverNivel2;
	@Column(nullable = false)
	private String urlCoverNivel3;
	@Column(nullable = false)
	private String urlCoverNivel4;
	
	//Construtores
	public AnimeCover() {
		
	}

	//Getters e Setters
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}

	public String getUrlCover() {
		return urlCover;
	}
	public void setUrlCover(String urlCover) {
		this.urlCover = urlCover;
	}

	public String getUrlCoverNivel0() {
		return urlCoverNivel0;
	}
	public void setUrlCoverNivel0(String urlCoverNivel0) {
		this.urlCoverNivel0 = urlCoverNivel0;
	}

	public String getUrlCoverNivel1() {
		return urlCoverNivel1;
	}
	public void setUrlCoverNivel1(String urlCoverNivel1) {
		this.urlCoverNivel1 = urlCoverNivel1;
	}

	public String getUrlCoverNivel2() {
		return urlCoverNivel2;
	}
	public void setUrlCoverNivel2(String urlCoverNivel2) {
		this.urlCoverNivel2 = urlCoverNivel2;
	}

	public String getUrlCoverNivel3() {
		return urlCoverNivel3;
	}
	public void setUrlCoverNivel3(String urlCoverNivel3) {
		this.urlCoverNivel3 = urlCoverNivel3;
	}

	public String getUrlCoverNivel4() {
		return urlCoverNivel4;
	}
	public void setUrlCoverNivel4(String urlCoverNivel4) {
		this.urlCoverNivel4 = urlCoverNivel4;
	}

}
