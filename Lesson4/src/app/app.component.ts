import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Lesson4';

  greenColor = 'green';
  showThirdParagraph = true;

  someObject = {
    id: 2,
    name: 'my name',
    description: 'some description'
  }

  now = new Date();

  someText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ipsum sed aliquid nemo ipsam ad voluptatibus molestiae repellat eum? Molestias possimus odio ut eveniet esse consequuntur nobis minus quod eaque.';

  textFilter = ''

  arrayOfText = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, tempore repellendus. Eum ut, ducimus consequatur, dicta vitae veniam, iure dolore voluptates doloremque beatae delectus mollitia? Numquam recusandae perspiciatis in expedita?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptate debitis, corporis quas corrupti repellendus provident esse? Rem minus non eius pariatur, minima rerum dolore fuga doloribus vel. Quasi, temporibus.',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reprehenderit similique, beatae quae distinctio aut quibusdam eum omnis nulla, autem vitae voluptatum, fugiat ab quam harum minus esse. Alias, placeat!'
  ];


  ngOnInit(): void {
  }



}
