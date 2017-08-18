package pl.jedynakbartosz.backend.task;

import lombok.AccessLevel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import pl.jedynakbartosz.backend.project.Project;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Data
@Table(name = "TASK")
@EqualsAndHashCode(of = "id")
public class Task {

    @Id
    @Setter(AccessLevel.NONE)
    @Column(name = "ID", columnDefinition = "char(36)")
    private String id;

    @Column(name = "NAME", length = 100, nullable = false)
    private String name;

    @Column(name = "DESCRIPTION", length = 500, nullable = false)
    private String description;

    @Column(name = "DATE_CREATED")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createDate;

    @ManyToOne
    @JoinColumn(name = "PROJECT_ID")
    private Project project;

    Task() {
        this.id = UUID.randomUUID().toString();
    }

    Task(String id) {
        this.id = id;
    }
}
