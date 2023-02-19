--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5 (Debian 10.5-2.pgdg90+1)
-- Dumped by pg_dump version 15.2 (Debian 15.2-1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

SET default_tablespace = '';

--
-- Name: post_logs; Type: TABLE; Schema: public; Owner: caveira
--

CREATE TABLE public.post_logs (
    id integer NOT NULL,
    action character varying(100) NOT NULL,
    post_id integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.post_logs OWNER TO caveira;

--
-- Name: post_logs_id_seq; Type: SEQUENCE; Schema: public; Owner: caveira
--

CREATE SEQUENCE public.post_logs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.post_logs_id_seq OWNER TO caveira;

--
-- Name: post_logs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: caveira
--

ALTER SEQUENCE public.post_logs_id_seq OWNED BY public.post_logs.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: caveira
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    content text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.posts OWNER TO caveira;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: caveira
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.posts_id_seq OWNER TO caveira;

--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: caveira
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: caveira
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    content text NOT NULL,
    rating integer NOT NULL,
    post_id integer NOT NULL,
    user_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.reviews OWNER TO caveira;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: caveira
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO caveira;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: caveira
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: caveira
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    role character varying(100) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO caveira;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: caveira
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO caveira;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: caveira
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: post_logs id; Type: DEFAULT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.post_logs ALTER COLUMN id SET DEFAULT nextval('public.post_logs_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: post_logs; Type: TABLE DATA; Schema: public; Owner: caveira
--

COPY public.post_logs (id, action, post_id, user_id, created_at, updated_at) FROM stdin;
1	create	1	2	2023-02-19 17:16:00.069	2023-02-19 17:16:00.069
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: caveira
--

COPY public.posts (id, title, content, created_at, updated_at) FROM stdin;
1	Blog test 1	Just for fun	2023-02-19 17:16:00.056	2023-02-19 17:16:00.056
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: caveira
--

COPY public.reviews (id, content, rating, post_id, user_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: caveira
--

COPY public.users (id, name, email, password, role, created_at, updated_at) FROM stdin;
1	waddi	admin@waddi.com	$2b$10$sNPfZGBUqpmUTLs1kLyaAO6RZ4MvpdVq7zwq9t6lQllaMfNAWLZIq	admin	2023-02-19 17:15:12.071	2023-02-19 17:15:12.071
2	Juan Creator	juan.creator@waddi.com	$2b$10$0mk9Zgf17ZONt87a/SYFle1R841dW8tKITjIy7TXYQR6D4l/Q4M/a	creator	2023-02-19 17:15:34.164	2023-02-19 17:15:34.164
\.


--
-- Name: post_logs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: caveira
--

SELECT pg_catalog.setval('public.post_logs_id_seq', 1, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: caveira
--

SELECT pg_catalog.setval('public.posts_id_seq', 1, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: caveira
--

SELECT pg_catalog.setval('public.reviews_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: caveira
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: post_logs post_logs_pkey; Type: CONSTRAINT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.post_logs
    ADD CONSTRAINT post_logs_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: post_logs post_logs_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.post_logs
    ADD CONSTRAINT post_logs_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id);


--
-- Name: post_logs post_logs_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.post_logs
    ADD CONSTRAINT post_logs_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: reviews reviews_post_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_post_id_fkey FOREIGN KEY (post_id) REFERENCES public.posts(id);


--
-- Name: reviews reviews_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: caveira
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

