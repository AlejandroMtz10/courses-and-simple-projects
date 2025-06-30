package com.example.videogames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.videogames.models.videogamesModel;

@Repository
public interface IvideogamesRepository extends JpaRepository<videogamesModel, Long> {

}
