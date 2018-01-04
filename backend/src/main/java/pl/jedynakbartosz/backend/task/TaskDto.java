package pl.jedynakbartosz.backend.task;

import javax.validation.constraints.NotNull;
import lombok.Data;
import org.hibernate.validator.constraints.Length;
import pl.jedynakbartosz.backend.project.Project;

@Data
public class TaskDto {

  private Long id;

  @NotNull
  @Length(min = 1, max = 100)
  private String name;

  @NotNull
  @Length(min = 1, max = 500)
  private String description;

  private String selectedDay;

  private Project project;
}
