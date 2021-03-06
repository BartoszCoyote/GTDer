package pl.jedynakbartosz.backend.security.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import pl.jedynakbartosz.backend.security.JwtTokenUtil;
import pl.jedynakbartosz.backend.security.JwtUser;
import pl.jedynakbartosz.backend.user.UserDto;
import pl.jedynakbartosz.backend.user.UserService;

@RequestMapping("/api/users")
public class UserRestController {

  @Value("${jwt.header}")
  private String tokenHeader;

  @Autowired private JwtTokenUtil jwtTokenUtil;

  @Autowired private UserDetailsService userDetailsService;

  @Autowired private UserService userService;

  @GetMapping
  public JwtUser getAuthenticatedUser(HttpServletRequest request) {
    String token = request.getHeader(tokenHeader).substring(7);
    String username = jwtTokenUtil.getUsernameFromToken(token);
    JwtUser user = (JwtUser) userDetailsService.loadUserByUsername(username);
    return user;
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  UserDto create(@Valid @RequestBody UserDto dto) {
    return userService.create(dto);
  }
}
