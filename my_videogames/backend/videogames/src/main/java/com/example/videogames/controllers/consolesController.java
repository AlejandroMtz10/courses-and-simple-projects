package com.example.videogames.controllers;

import com.example.videogames.models.consolesModel;
import com.example.videogames.services.consolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/consoles")
@CrossOrigin(origins = "*")
public class consolesController {
    @Autowired
    private consolesService consolesService;

    @GetMapping(value = "consoles", headers = "Accept=application/json")
    public List<consolesModel> getAllconsoles() {
        return consolesService.getAllconsoles();
    }

    @GetMapping(value = "console/{id}", headers = "Accept=application/json")
    public ResponseEntity<consolesModel> getconsolesById(@PathVariable Long id) {
        return consolesService.getConsoleById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping(value = "console", headers = "Accept=application/json")
    public void createConsole(@RequestBody consolesModel console) {
        consolesService.createConsole(console);
    }

    @PutMapping(value = "updateConsole/{Id}", headers = "Accept=application/json")
    public ResponseEntity<consolesModel> updateConsoles(@PathVariable Long Id, @RequestBody consolesModel console) {
        consolesModel updatedConsoles = consolesService.updateConsole(Id, console);
        if (updatedConsoles != null) {
            return ResponseEntity.ok(updatedConsoles);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping(value = "deleteConsole/{Id}", headers = "Accept=application/json")
    public ResponseEntity<Void> deleteConsoles(@PathVariable Long Id) {
        consolesService.deleteConsole(Id);
        return ResponseEntity.noContent().build();
    }
}
