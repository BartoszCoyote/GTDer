package pl.jedynakbartosz.backend.project;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.Data;
import pl.jedynakbartosz.backend.task.Task;

@Data
@Entity
@Table(name = "PROJECT")
public class Project {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(name = "ID")
  private Long id;

  @NotNull
  @Column(name = "NAME")
  private String name;

  @JsonIgnore
  @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
  private List<Task> tasks;

  Project() {}

  public Project(String name) {
    this.name = name;
  }
}
