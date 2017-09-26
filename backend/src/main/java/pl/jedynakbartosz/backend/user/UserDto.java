package pl.jedynakbartosz.backend.user;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Data
public class UserDto {

    private Long id;

    @NotNull
    @Length(min = 1, max = 100)
    private String username;

    @NotNull
    @Length(min = 1, max = 500)
    private String firstname;

    @NotNull
    @Length(min = 1, max = 500)
    private String lastname;

    @NotNull
    @Size(min = 4, max = 100)
    private String password;

    @NotNull
    @Size(min = 4, max = 50)
    private String email;

    @NotNull
    private Boolean enabled;

    @NotNull
    private Date lastPasswordResetDate;
}
