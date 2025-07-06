package com.example.videogames.controllers;

import com.example.videogames.models.videogamesModel;
import com.example.videogames.dtos.VideogamesDTO;
import com.example.videogames.services.videogamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/videogames")
@CrossOrigin(origins = "*")
public class videogamesController {
    @Autowired
    private videogamesService videgameService;

    @GetMapping(value = "videogames", headers = "Accept=application/json")
    public List<videogamesModel> getAllVideogames() {
        return videgameService.getAllVideogames();
    }

    @GetMapping("/videogames/details")
    public List<VideogamesDTO> getAllVideogamesDetails() {
        return videgameService.getAllVideogamesDTOs();
    }


    @GetMapping(value = "videogame/{id}", headers = "Accept=application/json")
    public ResponseEntity<videogamesModel> getvideogamesById(@PathVariable Long id) {
        return videgameService.getVideogameById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(value = "videogame", headers = "Accept=application/json")
    public void createVideogame(@RequestBody videogamesModel videogame) {
        videgameService.createVideogame(videogame);
    }

    @PutMapping(value = "updateVideogame/{Id}", headers = "Accept=application/json")
    public ResponseEntity<videogamesModel> updateVideogames(@PathVariable Long Id, @RequestBody videogamesModel videogame) {
        videogamesModel updatedVideogames = videgameService.updateVideogame(Id, videogame);
        if (updatedVideogames != null) {
            return ResponseEntity.ok(updatedVideogames);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "deleteVideogame/{Id}", headers = "Accept=application/json")
    public ResponseEntity<Void> deleteVideogames(@PathVariable Long Id) {
        videgameService.deleteVideogame(Id);
        return ResponseEntity.noContent().build();
    }
}
