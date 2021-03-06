PGDMP         /                y         	   catastros    13.4    13.4 4    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16574 	   catastros    DATABASE     f   CREATE DATABASE catastros WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Mexico.1252';
    DROP DATABASE catastros;
                postgres    false            ?            1259    16691    construcciones    TABLE     ?   CREATE TABLE public.construcciones (
    "idConstruccion" integer NOT NULL,
    "idPredio" integer NOT NULL,
    "areaTotal" integer NOT NULL,
    direccion character varying NOT NULL,
    "numeroPisos" integer DEFAULT 1,
    tipo character varying
);
 "   DROP TABLE public.construcciones;
       public         heap    postgres    false            ?            1259    16689 !   construcciones_idConstruccion_seq    SEQUENCE     ?   CREATE SEQUENCE public."construcciones_idConstruccion_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."construcciones_idConstruccion_seq";
       public          postgres    false    207            ?           0    0 !   construcciones_idConstruccion_seq    SEQUENCE OWNED BY     k   ALTER SEQUENCE public."construcciones_idConstruccion_seq" OWNED BY public.construcciones."idConstruccion";
          public          postgres    false    206            ?            1259    16658    predios    TABLE     ?   CREATE TABLE public.predios (
    "idPredio" integer NOT NULL,
    "numeroPredial" integer NOT NULL,
    nombre character varying,
    avaluo integer NOT NULL,
    departamento character varying NOT NULL,
    municipio character varying NOT NULL
);
    DROP TABLE public.predios;
       public         heap    postgres    false            ?            1259    16656    predios_idPredio_seq    SEQUENCE     ?   CREATE SEQUENCE public."predios_idPredio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public."predios_idPredio_seq";
       public          postgres    false    201            ?           0    0    predios_idPredio_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public."predios_idPredio_seq" OWNED BY public.predios."idPredio";
          public          postgres    false    200            ?            1259    16702    propietarios    TABLE     ?  CREATE TABLE public.propietarios (
    "idPropietario" integer NOT NULL,
    "idTipoDocumento" integer NOT NULL,
    "idTipoPropietario" integer NOT NULL,
    "idPredio" integer NOT NULL,
    "numeroDocumento" integer NOT NULL,
    direccion character varying NOT NULL,
    telefono integer NOT NULL,
    "numeroVerificacion" integer,
    nombres character varying,
    apellidos character varying,
    "razonSocial" character varying,
    correo character varying
);
     DROP TABLE public.propietarios;
       public         heap    postgres    false            ?            1259    16700    propietarios_idPropietario_seq    SEQUENCE     ?   CREATE SEQUENCE public."propietarios_idPropietario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 7   DROP SEQUENCE public."propietarios_idPropietario_seq";
       public          postgres    false    209            ?           0    0    propietarios_idPropietario_seq    SEQUENCE OWNED BY     e   ALTER SEQUENCE public."propietarios_idPropietario_seq" OWNED BY public.propietarios."idPropietario";
          public          postgres    false    208            ?            1259    16669    terrenos    TABLE     ?   CREATE TABLE public.terrenos (
    "idTerreno" integer NOT NULL,
    "idPredio" integer NOT NULL,
    area integer NOT NULL,
    "valorComercial" integer NOT NULL,
    tipo character varying,
    "fuentesAgua" boolean,
    construcciones boolean
);
    DROP TABLE public.terrenos;
       public         heap    postgres    false            ?            1259    16667    terrenos_idTerreno_seq    SEQUENCE     ?   CREATE SEQUENCE public."terrenos_idTerreno_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."terrenos_idTerreno_seq";
       public          postgres    false    203            ?           0    0    terrenos_idTerreno_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public."terrenos_idTerreno_seq" OWNED BY public.terrenos."idTerreno";
          public          postgres    false    202            ?            1259    16713    tiposDocumento    TABLE     ?   CREATE TABLE public."tiposDocumento" (
    "idTipoDocumento" integer NOT NULL,
    sigla character varying(5) NOT NULL,
    nombre character varying NOT NULL
);
 $   DROP TABLE public."tiposDocumento";
       public         heap    postgres    false            ?            1259    16711 !   tipoDocumento_idTipoDocumento_seq    SEQUENCE     ?   CREATE SEQUENCE public."tipoDocumento_idTipoDocumento_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 :   DROP SEQUENCE public."tipoDocumento_idTipoDocumento_seq";
       public          postgres    false    211            ?           0    0 !   tipoDocumento_idTipoDocumento_seq    SEQUENCE OWNED BY     n   ALTER SEQUENCE public."tipoDocumento_idTipoDocumento_seq" OWNED BY public."tiposDocumento"."idTipoDocumento";
          public          postgres    false    210            ?            1259    16680    tiposPropietario    TABLE     z   CREATE TABLE public."tiposPropietario" (
    "idTipoPropietario" integer NOT NULL,
    tipo character varying NOT NULL
);
 &   DROP TABLE public."tiposPropietario";
       public         heap    postgres    false            ?            1259    16678 &   tiposPropietario_idTipoPropietario_seq    SEQUENCE     ?   CREATE SEQUENCE public."tiposPropietario_idTipoPropietario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ?   DROP SEQUENCE public."tiposPropietario_idTipoPropietario_seq";
       public          postgres    false    205            ?           0    0 &   tiposPropietario_idTipoPropietario_seq    SEQUENCE OWNED BY     w   ALTER SEQUENCE public."tiposPropietario_idTipoPropietario_seq" OWNED BY public."tiposPropietario"."idTipoPropietario";
          public          postgres    false    204            I           2604    16839    construcciones idConstruccion    DEFAULT     ?   ALTER TABLE ONLY public.construcciones ALTER COLUMN "idConstruccion" SET DEFAULT nextval('public."construcciones_idConstruccion_seq"'::regclass);
 N   ALTER TABLE public.construcciones ALTER COLUMN "idConstruccion" DROP DEFAULT;
       public          postgres    false    207    206    207            F           2604    16840    predios idPredio    DEFAULT     x   ALTER TABLE ONLY public.predios ALTER COLUMN "idPredio" SET DEFAULT nextval('public."predios_idPredio_seq"'::regclass);
 A   ALTER TABLE public.predios ALTER COLUMN "idPredio" DROP DEFAULT;
       public          postgres    false    201    200    201            K           2604    16841    propietarios idPropietario    DEFAULT     ?   ALTER TABLE ONLY public.propietarios ALTER COLUMN "idPropietario" SET DEFAULT nextval('public."propietarios_idPropietario_seq"'::regclass);
 K   ALTER TABLE public.propietarios ALTER COLUMN "idPropietario" DROP DEFAULT;
       public          postgres    false    208    209    209            G           2604    16842    terrenos idTerreno    DEFAULT     |   ALTER TABLE ONLY public.terrenos ALTER COLUMN "idTerreno" SET DEFAULT nextval('public."terrenos_idTerreno_seq"'::regclass);
 C   ALTER TABLE public.terrenos ALTER COLUMN "idTerreno" DROP DEFAULT;
       public          postgres    false    203    202    203            L           2604    16843    tiposDocumento idTipoDocumento    DEFAULT     ?   ALTER TABLE ONLY public."tiposDocumento" ALTER COLUMN "idTipoDocumento" SET DEFAULT nextval('public."tipoDocumento_idTipoDocumento_seq"'::regclass);
 Q   ALTER TABLE public."tiposDocumento" ALTER COLUMN "idTipoDocumento" DROP DEFAULT;
       public          postgres    false    210    211    211            H           2604    16844 "   tiposPropietario idTipoPropietario    DEFAULT     ?   ALTER TABLE ONLY public."tiposPropietario" ALTER COLUMN "idTipoPropietario" SET DEFAULT nextval('public."tiposPropietario_idTipoPropietario_seq"'::regclass);
 U   ALTER TABLE public."tiposPropietario" ALTER COLUMN "idTipoPropietario" DROP DEFAULT;
       public          postgres    false    205    204    205            ?          0    16691    construcciones 
   TABLE DATA           s   COPY public.construcciones ("idConstruccion", "idPredio", "areaTotal", direccion, "numeroPisos", tipo) FROM stdin;
    public          postgres    false    207   NB       ?          0    16658    predios 
   TABLE DATA           g   COPY public.predios ("idPredio", "numeroPredial", nombre, avaluo, departamento, municipio) FROM stdin;
    public          postgres    false    201   kB       ?          0    16702    propietarios 
   TABLE DATA           ?   COPY public.propietarios ("idPropietario", "idTipoDocumento", "idTipoPropietario", "idPredio", "numeroDocumento", direccion, telefono, "numeroVerificacion", nombres, apellidos, "razonSocial", correo) FROM stdin;
    public          postgres    false    209   ?B       ?          0    16669    terrenos 
   TABLE DATA           x   COPY public.terrenos ("idTerreno", "idPredio", area, "valorComercial", tipo, "fuentesAgua", construcciones) FROM stdin;
    public          postgres    false    203   ?B       ?          0    16713    tiposDocumento 
   TABLE DATA           L   COPY public."tiposDocumento" ("idTipoDocumento", sigla, nombre) FROM stdin;
    public          postgres    false    211   ?B       ?          0    16680    tiposPropietario 
   TABLE DATA           G   COPY public."tiposPropietario" ("idTipoPropietario", tipo) FROM stdin;
    public          postgres    false    205   (C       ?           0    0 !   construcciones_idConstruccion_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."construcciones_idConstruccion_seq"', 7, true);
          public          postgres    false    206            ?           0    0    predios_idPredio_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."predios_idPredio_seq"', 4, true);
          public          postgres    false    200            ?           0    0    propietarios_idPropietario_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."propietarios_idPropietario_seq"', 8, true);
          public          postgres    false    208            ?           0    0    terrenos_idTerreno_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."terrenos_idTerreno_seq"', 2, true);
          public          postgres    false    202            ?           0    0 !   tipoDocumento_idTipoDocumento_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public."tipoDocumento_idTipoDocumento_seq"', 3, true);
          public          postgres    false    210            ?           0    0 &   tiposPropietario_idTipoPropietario_seq    SEQUENCE SET     V   SELECT pg_catalog.setval('public."tiposPropietario_idTipoPropietario_seq"', 4, true);
          public          postgres    false    204            V           2606    16699 "   construcciones construcciones_pkey 
   CONSTRAINT     n   ALTER TABLE ONLY public.construcciones
    ADD CONSTRAINT construcciones_pkey PRIMARY KEY ("idConstruccion");
 L   ALTER TABLE ONLY public.construcciones DROP CONSTRAINT construcciones_pkey;
       public            postgres    false    207            N           2606    16872 !   predios predios_numeroPredial_key 
   CONSTRAINT     i   ALTER TABLE ONLY public.predios
    ADD CONSTRAINT "predios_numeroPredial_key" UNIQUE ("numeroPredial");
 M   ALTER TABLE ONLY public.predios DROP CONSTRAINT "predios_numeroPredial_key";
       public            postgres    false    201            P           2606    16666    predios predios_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.predios
    ADD CONSTRAINT predios_pkey PRIMARY KEY ("idPredio");
 >   ALTER TABLE ONLY public.predios DROP CONSTRAINT predios_pkey;
       public            postgres    false    201            X           2606    16710    propietarios propietarios_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.propietarios
    ADD CONSTRAINT propietarios_pkey PRIMARY KEY ("idPropietario");
 H   ALTER TABLE ONLY public.propietarios DROP CONSTRAINT propietarios_pkey;
       public            postgres    false    209            R           2606    16677    terrenos terrenos_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.terrenos
    ADD CONSTRAINT terrenos_pkey PRIMARY KEY ("idTerreno");
 @   ALTER TABLE ONLY public.terrenos DROP CONSTRAINT terrenos_pkey;
       public            postgres    false    203            Z           2606    16721 !   tiposDocumento tipoDocumento_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public."tiposDocumento"
    ADD CONSTRAINT "tipoDocumento_pkey" PRIMARY KEY ("idTipoDocumento");
 O   ALTER TABLE ONLY public."tiposDocumento" DROP CONSTRAINT "tipoDocumento_pkey";
       public            postgres    false    211            T           2606    16688 &   tiposPropietario tiposPropietario_pkey 
   CONSTRAINT     y   ALTER TABLE ONLY public."tiposPropietario"
    ADD CONSTRAINT "tiposPropietario_pkey" PRIMARY KEY ("idTipoPropietario");
 T   ALTER TABLE ONLY public."tiposPropietario" DROP CONSTRAINT "tiposPropietario_pkey";
       public            postgres    false    205            \           2606    16737 %   construcciones predios-construcciones    FK CONSTRAINT     ?   ALTER TABLE ONLY public.construcciones
    ADD CONSTRAINT "predios-construcciones" FOREIGN KEY ("idPredio") REFERENCES public.predios("idPredio");
 Q   ALTER TABLE ONLY public.construcciones DROP CONSTRAINT "predios-construcciones";
       public          postgres    false    201    2896    207            _           2606    16732 !   propietarios predios-propietarios    FK CONSTRAINT     ?   ALTER TABLE ONLY public.propietarios
    ADD CONSTRAINT "predios-propietarios" FOREIGN KEY ("idPredio") REFERENCES public.predios("idPredio");
 M   ALTER TABLE ONLY public.propietarios DROP CONSTRAINT "predios-propietarios";
       public          postgres    false    2896    209    201            [           2606    16742    terrenos predios-terrenos    FK CONSTRAINT     ?   ALTER TABLE ONLY public.terrenos
    ADD CONSTRAINT "predios-terrenos" FOREIGN KEY ("idPredio") REFERENCES public.predios("idPredio");
 E   ALTER TABLE ONLY public.terrenos DROP CONSTRAINT "predios-terrenos";
       public          postgres    false    2896    203    201            ]           2606    16722 '   propietarios tipoDocumento-propietarios    FK CONSTRAINT     ?   ALTER TABLE ONLY public.propietarios
    ADD CONSTRAINT "tipoDocumento-propietarios" FOREIGN KEY ("idTipoDocumento") REFERENCES public."tiposDocumento"("idTipoDocumento");
 S   ALTER TABLE ONLY public.propietarios DROP CONSTRAINT "tipoDocumento-propietarios";
       public          postgres    false    211    2906    209            ^           2606    16727 *   propietarios tiposPropietario-propietarios    FK CONSTRAINT     ?   ALTER TABLE ONLY public.propietarios
    ADD CONSTRAINT "tiposPropietario-propietarios" FOREIGN KEY ("idTipoPropietario") REFERENCES public."tiposPropietario"("idTipoPropietario");
 V   ALTER TABLE ONLY public.propietarios DROP CONSTRAINT "tiposPropietario-propietarios";
       public          postgres    false    205    209    2900            ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?   V   x?3?tv?t>?2?4'Q!%U?9?4%1%1/3?ˈ??3??????Ԣ|??gJj^IfZfrbr???y\Ɯ??ŉ?E%?\1z\\\ Q??      ?   #   x?3??K,)-J??2??*-:?6%39?+F??? zU;     