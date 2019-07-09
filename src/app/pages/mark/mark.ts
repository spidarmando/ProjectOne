import { Component } from '@angular/core'


@Component({
    selector: '',
    templateUrl: './mark.html',
    styles: [`
    header{
        background-color:#2a2a2a;
    }
    ul{
        list-style:none;
        padding: 10px 0;    
        margin:0;
    }
    li{
        display:inline;
        color:#fff;
        margin-right:1rem;
    }
    .img-wrapper{
        border-bottom:1px solid #2a2a2a;
    }
    ul.options li{
        color:#2a2a2a !important;
        cursor:pointer;
    }
    ul.options li:hover{
        border-bottom:2px solid black;
    }
    section{
        height: 485px;
        background-image: url(https://www.rei.com/assets/camp/images/hero-desktop/live.jpg);
        background-position: center 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    section div{
        display: flex;
        align-items: center;
        height: 100%;
    }
    section h1{
        margin:0 auto;;
        color:#fff;
        font-size:4rem;
    }
    .ops{
        padding:2rem 0;
        background-color:#f6f6f6;
    }
    
    .card{
        cursor:pointer;
    }
    .images{
        text-align:center;
    }
    .images img{
        height:4rem;
    }
    .images h3{
        margin-top:1rem;
    }
    .featured{
        margin-top:3rem;
    }
    .card img{
        height:11rem;
    }
    footer a{
        display:block;
        color:#000;
    }
    footer{
        padding:3rem 0;
    }
    footer h2{
        text-align:center;
        padding:1rem 0;
    }
   
    `]
})

export class Mark {
    
}