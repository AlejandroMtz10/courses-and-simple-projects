package com.example.videogames.controllers;

import com.example.videogames.models.clasifications_esrbModel;
import com.example.videogames.services.clasifications_esrbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/ESRB")
@CrossOrigin(origins = "*")
public class clasifications_esrbController {
    @Autowired
    private clasifications_esrbService clasificationsEsrbService;

    @GetMapping(value = "clasifications", headers = "Accept=application/json")
    public List<clasifications_esrbModel> getAllClasifications() {
        return clasificationsEsrbService.getAllClasifications();
    }

    @GetMapping(value = "clasification/{id}", headers = "Accept=application/json")
    public ResponseEntity<clasifications_esrbModel> getClasificationById(@PathVariable Long id) {
        return clasificationsEsrbService.getClasificationById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(value = "clasification", headers = "Accept=application/json")
    public void createClasification(@RequestBody clasifications_esrbModel clasification) {
        clasificationsEsrbService.createClasification(clasification);
    }

    @PutMapping(value = "updateClasification/{Id}", headers = "Accept=application/json")
    public ResponseEntity<clasifications_esrbModel> updateclasification(@PathVariable Long Id, @RequestBody clasifications_esrbModel clasification) {
        clasifications_esrbModel updatedClasification = clasificationsEsrbService.updateClasification(Id, clasification);
        if (updatedClasification != null) {
            return ResponseEntity.ok(updatedClasification);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "deleteClasification/{Id}", headers = "Accept=application/json")
    public ResponseEntity<Void> deleteclasification(@PathVariable Long Id) {
        clasificationsEsrbService.deleteClasification_esrb(Id);
        return ResponseEntity.noContent().build();
    }
}
