package com.example.videogames.controllers;

import com.example.videogames.models.videogamesModel;
import com.example.videogames.dtos.VideogamesDTO;
import com.example.videogames.dtos.UpdateVideogameDTO;
import com.example.videogames.services.videogamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/videogames")
@CrossOrigin(origins = "*")
public class videogamesController {
    @Autowired
    private videogamesService videgameService;

    @GetMapping(value = "/allVideogames", headers = "Accept=application/json")
    public List<videogamesModel> getAllVideogames() {
        return videgameService.getAllVideogames();
    }

    @GetMapping("/videogames/details")
    public List<VideogamesDTO> getAllVideogamesDetails() {
        return videgameService.getAllVideogamesDTOs();
    }


    @GetMapping(value = "/videogame/{id}", headers = "Accept=application/json")
    public ResponseEntity<VideogamesDTO> getvideogamesById(@PathVariable Long id) {
        return videgameService.getVideogameDTOById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(value = "/videogame", headers = "Accept=application/json")
    public ResponseEntity<videogamesModel> createVideogame(@RequestBody videogamesModel videogame) {
        videogamesModel saved = videgameService.createVideogame(videogame);
        return ResponseEntity.ok(saved);
    }

    @PutMapping(value = "/updateVideogame/{id}", headers = "Accept=application/json")
    public ResponseEntity<VideogamesDTO> updateVideogame(@PathVariable("id") Long id, @RequestBody UpdateVideogameDTO dto) {
        Optional<videogamesModel> optional = videgameService.getVideogameById(id);
        if (optional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        videogamesModel game = optional.get();
        game.setPrice(dto.getPrice());
        game.setHistory_completed(dto.getHistoryCompleted()); // <-- Usar getHistoryCompleted()
        game.setGame_completed(dto.isGameCompleted());      // <-- Usar isGameCompleted()

        videogamesModel updatedGame = videgameService.createVideogame(game);
        Optional<VideogamesDTO> updatedGameDTOOptional = videgameService.getVideogameDTOById(updatedGame.getId_videogame());

        if (updatedGameDTOOptional.isEmpty()) {
            return ResponseEntity.internalServerError().build();
        }
        return ResponseEntity.ok(updatedGameDTOOptional.get());
    }


    @DeleteMapping(value = "/deleteVideogame/{Id}", headers = "Accept=application/json")
    public ResponseEntity<Void> deleteVideogames(@PathVariable Long Id) {
        videgameService.deleteVideogame(Id);
        return ResponseEntity.noContent().build();
    }
}
