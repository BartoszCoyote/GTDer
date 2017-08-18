package pl.jedynakbartosz.backend.task;

import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class TaskDto {

    private String id;

    @NotNull
    @Length(min = 1, max = 100)
    private String name;

    @NotNull
    @Length(min = 1, max = 500)
    private String description;

    @NotNull
    private Date createDate;

}


