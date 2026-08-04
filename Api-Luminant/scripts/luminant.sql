BEGIN;

CREATE TABLE IF NOT EXISTS public.usuario
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome text NOT NULL,
    username varchar(30) UNIQUE NOT NULL,
    email text UNIQUE NOT NULL,
    password_hash text NOT NULL,
    avatar_url text,
    bio text,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.posts
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL,
	community_id uuid,
    title character varying(80) NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    post_type character varying(25) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.media
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    post_id uuid NOT NULL,
    url text NOT NULL,
    media_type character varying(10) NOT NULL,
    width integer,
    height integer,
    duration integer,
    size bigint,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.comments
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    post_id uuid NOT NULL,
    user_id uuid NOT NULL,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.likes
(
    post_id uuid NOT NULL,
    user_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (post_id, user_id)
);

CREATE TABLE IF NOT EXISTS public.follows
(
    follower_id uuid NOT NULL,
    following_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (follower_id, following_id)
);

CREATE TABLE IF NOT EXISTS public.communities
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome character varying(60) NOT NULL,
    description character varying(100) NOT NULL,
    icon_url text NOT NULL,
    owner_id uuid NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.community_members
(
    community_id uuid not null,
    user_id uuid NOT NULL,
    role character varying(25) NOT NULL,
    joined_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
	primary key (community_id, user_id)
);

CREATE TABLE IF NOT EXISTS public.tags
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    nome varchar(50) UNIQUE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.post_tags
(
    post_id uuid NOT NULL,
    tag_id uuid NOT NULL,
	primary key(post_id, tag_id)
);


ALTER TABLE IF EXISTS public.posts
    ADD CONSTRAINT fk_posts_user FOREIGN KEY (user_id)
    REFERENCES public.usuario (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.media
    ADD CONSTRAINT fk_post_media FOREIGN KEY (post_id)
    REFERENCES public.posts (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.comments
    ADD CONSTRAINT fk_comments_user FOREIGN KEY (user_id)
    REFERENCES public.usuario (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.comments
    ADD CONSTRAINT fk_post_comments FOREIGN KEY (post_id)
    REFERENCES public.posts (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.likes
    ADD CONSTRAINT fk_likes_user FOREIGN KEY (user_id)
    REFERENCES public.usuario (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.likes
    ADD CONSTRAINT fk_post_likes FOREIGN KEY (post_id)
    REFERENCES public.posts (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.follows
    ADD CONSTRAINT follower_id FOREIGN KEY (follower_id)
    REFERENCES public.usuario (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.follows
    ADD CONSTRAINT following_id FOREIGN KEY (following_id)
    REFERENCES public.usuario (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.communities
    ADD CONSTRAINT fk_communities_user FOREIGN KEY (owner_id)
    REFERENCES public.usuario (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.community_members
    ADD CONSTRAINT fk_members_user FOREIGN KEY (user_id) 
    REFERENCES public.usuario (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.community_members
    ADD CONSTRAINT community_id FOREIGN KEY (community_id)
    REFERENCES public.communities (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.post_tags
    ADD CONSTRAINT fk_post_tags FOREIGN KEY (post_id)
    REFERENCES public.posts (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE public.posts
	ADD CONSTRAINT fk_posts_community
	FOREIGN KEY (community_id)
	REFERENCES public.communities(id)
	ON UPDATE NO ACTION
	ON DELETE NO ACTION
	NOT VALID;

ALTER TABLE IF EXISTS public.post_tags
    ADD CONSTRAINT tag_id FOREIGN KEY (tag_id)
    REFERENCES public.tags (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

ALTER TABLE IF EXISTS public.usuario
    ADD COLUMN is_active BOOLEAN NOT NULL DEFAULT TRUE;

END;