import { Component, Input } from '@angular/core';
import { formViewProvider } from 'src/app/form-view-provider';
import { HeroAndLikes, Like, nextNewId } from 'src/app/model';

@Component({
  selector: 'app-likes-edit',
  templateUrl: './likes-edit.component.html',
  styleUrls: ['./likes-edit.component.less'],
  viewProviders: [formViewProvider]
})
export class LikesEditComponent {
  @Input() model!: HeroAndLikes;

  addLike() {
    const heroId = this.model.hero.id;
    const newLikes = this.model.likes.concat(
      { id: nextNewId(), heroId, name: '' }
    );
    this.model.likes = newLikes;
  }

  removeLike(like: Like) {
    this.model.likes = this.model.likes.filter(l => l !== like);
  }
}
