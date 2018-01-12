package pl.jedynakbartosz.backend.project;

import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

  public static ProjectDto map(Project project) {
    ProjectDto dto = new ProjectDto();
    dto.setId(project.getId());
    dto.setName(project.getName());
    dto.setColor(project.getColor());
    return dto;
  }

  public Project map(ProjectDto dto) {

    Project project;
    if (dto.getName() != null) {
      project = new Project(dto.getName());
    } else {
      project = new Project();
    }
    project.setName(dto.getName());
    project.setColor(dto.getColor());
    return project;
  }
}
