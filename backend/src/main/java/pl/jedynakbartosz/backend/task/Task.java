package pl.jedynakbartosz.backend.task;

import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import pl.jedynakbartosz.backend.project.Project;

import javax.persistence.*;

@Entity
@Data
@Table(name = "TASK")
@EqualsAndHashCode(of = "id")
public class Task {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(
            name = "UUID",
            strategy = "org.hibernate.id.UUIDGenerator"
    )
    @Column(name = "id", updatable = false, nullable = false)
    private String id;

    @Column(name = "NAME", length = 100, nullable = false)
    private String name;

    @Column(name = "DESCRIPTION", length = 500, nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "PROJECT_ID")
    private Project project;

    Task(String id) {
        this.id = id;
    }

    Task() {
    }

    ;
}
