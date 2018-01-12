package pl.jedynakbartosz.backend.user;

import java.awt.print.PrinterIOException;
import java.security.Principal;
import java.util.List;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pl.jedynakbartosz.backend.task.TaskDto;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

  public static final Logger logger = LoggerFactory.getLogger(UserController.class);

  @Autowired UserService userService;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  UserDto create(@Valid @RequestBody UserDto dto) {
    return userService.create(dto);
  }

  @GetMapping
  List<UserDto> findAll() {
    return userService.findAll();
  }

  @PutMapping("/{id}")
  UserDto update(@PathVariable("id") Long id, @Valid @RequestBody UserDto dto) {
    return userService.update(id, dto);
  }

  @GetMapping("/who")
  String who(Principal principal){ return userService.who(principal);}

  @GetMapping("/me")
  UserDto me(Principal principal){ return userService.me(principal);}
}
