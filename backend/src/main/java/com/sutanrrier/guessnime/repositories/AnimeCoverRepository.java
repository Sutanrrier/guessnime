package com.sutanrrier.guessnime.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sutanrrier.guessnime.entities.AnimeCover;

@Repository
public interface AnimeCoverRepository extends JpaRepository<AnimeCover, Long> {

	@Query("FROM AnimeCover WHERE UPPER(title) LIKE %?#{[0].toUpperCase()}%")
	List<AnimeCover> findByTitle(String title);
}
