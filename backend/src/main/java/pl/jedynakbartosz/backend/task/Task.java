package pl.jedynakbartosz.backend.task;

import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import pl.jedynakbartosz.backend.project.Project;
import pl.jedynakbartosz.backend.user.User;

@Entity
@Data
@Table(name = "TASK")
@EqualsAndHashCode(of = "id")
public class Task {

  @Id
  @Column(name = "ID")
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Setter(AccessLevel.NONE)
  @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
  private Long id;

  @Column(name = "NAME", length = 100, nullable = false)
  private String name;

  @Column(name = "DESCRIPTION", length = 500, nullable = false)
  private String description;

  @ManyToOne(cascade = CascadeType.PERSIST)
  @JsonIgnore
  @JoinColumn(name = "PROJECT_ID")
  private Project project;

  @Column(name = "SELECTEDDAY", length = 500, nullable = false)
  private String selectedDay;

  @ManyToOne
  @JoinColumn(referencedColumnName = "ID", name = "user_id")
  private User user;

  Task(Long id) {
    this.id = id;
  }

  Task() {};
}
