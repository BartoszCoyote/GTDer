package pl.jedynakbartosz.backend.project;

import javax.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

@Data
public class ProjectDto {

  private Long id;

  @NotNull
  @Length(min = 1, max = 100)
  private String name;

  private String color;

}
