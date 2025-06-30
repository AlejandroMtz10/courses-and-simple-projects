package com.example.videogames.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.videogames.models.clasifications_esrbModel;

@Repository
public interface Iclasifications_esrbRepository extends JpaRepository<clasifications_esrbModel, Long> {

}
