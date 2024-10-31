.class public Lcom/github/catvod/spider/Wexkoukou2;
.super Lcom/github/catvod/crawler/Spider;


# instance fields
.field private oOoOoOoOoOoOoO0o:Ljava/lang/String;


# direct methods
.method public constructor <init>()V
    .registers 2

    invoke-direct {p0}, Lcom/github/catvod/crawler/Spider;-><init>()V

    const-string v0, "041700015C7843071C5F0A3E5C564C414834030E4E4753645E"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Lcom/github/catvod/spider/Wexkoukou2;->oOoOoOoOoOoOoO0o:Ljava/lang/String;

    return-void
.end method

.method private oOoOoOoOoOoOoO0o()Ljava/util/Map;
    .registers 3
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "()",
            "Ljava/util/Map",
            "<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation

    const-string v0, "391011034B160B061A05"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v1, "03081C05122743505A4054795D52"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/merge/OoOoO0O0o0oOoO0O/oOoOoOoOoOoOoO0o;->oOo0oOo0Oo0oO0Oo(Ljava/lang/String;Ljava/lang/String;)Ljava/util/HashMap;

    move-result-object v0

    return-object v0
.end method


# virtual methods
.method public categoryContent(Ljava/lang/String;Ljava/lang/String;ZLjava/util/HashMap;)Ljava/lang/String;
    .registers 16
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Z",
            "Ljava/util/HashMap",
            "<",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            ">;)",
            "Ljava/lang/String;"
        }
    .end annotation

    const/4 v6, 0x1

    const/4 v5, 0x0

    invoke-static {}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOoOoOo0O0O0oO0o;->oOoOoOo0oOo0o0oO()Ljava/util/HashMap;

    move-result-object v1

    const/16 v0, 0x650

    :goto_8
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_270

    goto :goto_8

    :cond_e
    :sswitch_e
    const/16 v0, 0x68e

    goto :goto_8

    :sswitch_11
    if-eqz p4, :cond_e

    const/16 v0, 0x6ad

    goto :goto_8

    :sswitch_16
    invoke-virtual {p4}, Ljava/util/HashMap;->size()I

    move-result v2

    const/16 v0, 0x6cc

    :goto_1c
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_282

    goto :goto_1c

    :sswitch_22
    if-lez v2, :cond_27

    const/16 v0, 0x729

    goto :goto_1c

    :cond_27
    :sswitch_27
    const/16 v0, 0x70a

    goto :goto_1c

    :sswitch_2a
    invoke-virtual {v1, p4}, Ljava/util/HashMap;->putAll(Ljava/util/Map;)V

    :sswitch_2d
    const-string v0, "0F0200142F33"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    const/16 v0, 0x748

    :goto_39
    xor-int/lit16 v0, v0, 0x759

    sparse-switch v0, :sswitch_data_294

    goto :goto_39

    :sswitch_3f
    if-nez v2, :cond_45

    const v0, 0xbe60

    goto :goto_39

    :cond_45
    :sswitch_45
    const v0, 0xbe41

    goto :goto_39

    :sswitch_49
    const v0, 0xbe7f

    :goto_4c
    const v1, 0xbe90

    xor-int/2addr v0, v1

    sparse-switch v0, :sswitch_data_2a6

    goto :goto_4c

    :goto_54
    :sswitch_54
    const-string v0, "0D111110"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p4, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v1

    const-string v4, ""

    const v0, 0xbefb

    :goto_63
    const v2, 0xbf0c

    xor-int/2addr v0, v2

    sparse-switch v0, :sswitch_data_2b0

    goto :goto_63

    :cond_6b
    :sswitch_6b
    const v0, 0xbf39

    goto :goto_63

    :sswitch_6f
    const v0, 0xbe9e

    goto :goto_4c

    :sswitch_73
    const-string v0, "0F0200142F33"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v1, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    move-object p1, v0

    goto :goto_54

    :sswitch_81
    if-nez v1, :cond_6b

    const v0, 0xc1e3

    goto :goto_63

    :sswitch_87
    const-string v0, ""

    const v1, 0xc202

    :goto_8c
    const v2, 0xc213

    xor-int/2addr v1, v2

    sparse-switch v1, :sswitch_data_2c2

    goto :goto_8c

    :sswitch_94
    const v1, 0xc221

    goto :goto_8c

    :sswitch_98
    move-object v1, v0

    :goto_99
    const-string v0, "15061503"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p4, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v2

    const v0, 0xc27e

    :goto_a6
    const v3, 0xc28f

    xor-int/2addr v0, v3

    sparse-switch v0, :sswitch_data_2cc

    goto :goto_a6

    :cond_ae
    :sswitch_ae
    const v0, 0xc2bc

    goto :goto_a6

    :sswitch_b2
    const-string v0, "0D111110"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p4, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    move-object v1, v0

    goto :goto_99

    :sswitch_c0
    if-nez v2, :cond_ae

    const v0, 0xc2db

    goto :goto_a6

    :sswitch_c6
    const-string v0, ""

    const v2, 0xc2fa

    :goto_cb
    const v3, 0xc30b

    xor-int/2addr v2, v3

    sparse-switch v2, :sswitch_data_2de

    goto :goto_cb

    :sswitch_d3
    const v2, 0xc5a4

    goto :goto_cb

    :sswitch_d7
    move-object v2, v0

    :goto_d8
    const-string v0, "0F0F150215"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p4, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    const v0, 0xc601

    :goto_e5
    const v7, 0xc612

    xor-int/2addr v0, v7

    sparse-switch v0, :sswitch_data_2e8

    goto :goto_e5

    :sswitch_ed
    if-nez v3, :cond_101

    const v0, 0xc65e

    goto :goto_e5

    :sswitch_f3
    const-string v0, "15061503"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p4, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    move-object v2, v0

    goto :goto_d8

    :cond_101
    :sswitch_101
    const v0, 0xc63f

    goto :goto_e5

    :sswitch_105
    const-string v0, ""

    const v3, 0xc67d

    :goto_10a
    const v7, 0xc68e

    xor-int/2addr v3, v7

    sparse-switch v3, :sswitch_data_2fa

    goto :goto_10a

    :sswitch_112
    move-object v3, v0

    :goto_113
    const-string v0, "00021A16"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p4, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v7

    const v0, 0xc984

    :goto_120
    const v8, 0xc995

    xor-int/2addr v0, v8

    sparse-switch v0, :sswitch_data_304

    goto :goto_120

    :sswitch_128
    if-nez v7, :cond_140

    const v0, 0xc9e1

    goto :goto_120

    :sswitch_12e
    const v3, 0xc69c

    goto :goto_10a

    :sswitch_132
    const-string v0, "0F0F150215"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p4, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    move-object v3, v0

    goto :goto_113

    :cond_140
    :sswitch_140
    const v0, 0xc9c2

    goto :goto_120

    :sswitch_144
    const v0, 0xca00

    :goto_147
    const v7, 0xca11

    xor-int/2addr v0, v7

    packed-switch v0, :pswitch_data_316

    :pswitch_14e  #0xf, 0x10
    goto :goto_147

    :pswitch_14f  #0xe
    move-object v0, v4

    :goto_150
    new-instance v4, Ljava/lang/StringBuilder;

    invoke-direct {v4}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v7, p0, Lcom/github/catvod/spider/Wexkoukou2;->oOoOoOoOoOoOoO0o:Ljava/lang/String;

    invoke-virtual {v4, v7}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-static {}, Lcom/github/catvod/spider/merge/OoOo0o0Oo0oO0o0o/oOoOo0O0Oo0o0OoO;->oOoOo0O0Oo0o0OoO()Landroid/content/Context;

    move-result-object v7

    const-string v8, "0055061F23605F573A46360F3E2A4233151D003A2D202926592B031F3511080C134328052D5A1102052D1F4C431C2F1A0A081C3F310D240A47414D363C101A212067365332492C6E1B3937003F35583133072C661A291001130E583635432803551519480F64250D2D172B6A"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    invoke-static {v7, v8}, Lcom/wexfnw/libso/LoadNiMa;->decodedata(Landroid/content/Context;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    const/4 v8, 0x6

    new-array v8, v8, [Ljava/lang/Object;

    aput-object p1, v8, v5

    aput-object v3, v8, v6

    const/4 v3, 0x2

    aput-object v1, v8, v3

    const/4 v1, 0x3

    aput-object v0, v8, v1

    const/4 v0, 0x4

    aput-object v2, v8, v0

    const/4 v0, 0x5

    aput-object p2, v8, v0

    invoke-static {v7, v8, v4}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOoO0o0oOo0oO0Oo;->oOo0oOo0Oo0oO0Oo(Ljava/lang/String;[Ljava/lang/Object;Ljava/lang/StringBuilder;)Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0}, Lcom/github/catvod/spider/Wexkoukou2;->oOoOoOoOoOoOoO0o()Ljava/util/Map;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/merge/oOoOoO0oOo0oO0O0/oOo0oOo0Oo0oO0Oo;->oOoOoO0oOoO0OoOo(Ljava/lang/String;Ljava/util/Map;)Ljava/lang/String;

    move-result-object v0

    new-instance v7, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;

    invoke-direct {v7}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;-><init>()V

    new-instance v4, Ljava/util/ArrayList;

    invoke-direct {v4}, Ljava/util/ArrayList;-><init>()V

    const-string v1, "000A0705"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOo0oOo0Oo0oO0Oo;->oOo0oOo0Oo0oO0Oo(Ljava/lang/String;Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v8

    sget-object v0, Lcom/github/catvod/spider/Init;->oOoOoOo0O0O0oO0o:Lorg/json/JSONObject;

    const-string v1, "0B04"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v1, "5C"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/String;->contains(Ljava/lang/CharSequence;)Z

    move-result v1

    const v0, 0xca7c

    :goto_1b4
    const v2, 0xca8d

    xor-int/2addr v0, v2

    sparse-switch v0, :sswitch_data_322

    goto :goto_1b4

    :sswitch_1bc
    if-eqz v1, :cond_1d4

    const v0, 0xcd64

    goto :goto_1b4

    :pswitch_1c2  #0x11
    const v0, 0xca1f

    goto :goto_147

    :sswitch_1c6
    const-string v0, "00021A16"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p4, v0}, Ljava/util/HashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    goto/16 :goto_150

    :cond_1d4
    :sswitch_1d4
    const v0, 0xcd45

    goto :goto_1b4

    :sswitch_1d8
    new-instance v0, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;

    sget-object v1, Lcom/github/catvod/spider/Init;->oOoO0o0oOo0oO0Oo:Lorg/json/JSONObject;

    const-string v2, "1A0C103802"

    invoke-static {v2}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    invoke-virtual {v1, v2}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    sget-object v2, Lcom/github/catvod/spider/Init;->oOoO0o0oOo0oO0Oo:Lorg/json/JSONObject;

    const-string v3, "1A0C103F073A09"

    invoke-static {v3}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    invoke-virtual {v2, v3}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    sget-object v3, Lcom/github/catvod/spider/Init;->oOoO0o0oOo0oO0Oo:Lorg/json/JSONObject;

    const-string v9, "1A0C10210F34"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    invoke-virtual {v3, v9}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    sget-object v9, Lcom/github/catvod/spider/Init;->oOoO0o0oOo0oO0Oo:Lorg/json/JSONObject;

    const-string v10, "1A0C1023033A0D111F02"

    invoke-static {v10}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v10

    invoke-virtual {v9, v10}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    invoke-direct {v0, v1, v2, v3, v9}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    invoke-virtual {v4, v0}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    :sswitch_210
    invoke-virtual {v8}, Lorg/json/JSONArray;->length()I

    move-result v1

    const v0, 0xcd83

    :goto_217
    const v2, 0xcd94

    xor-int/2addr v0, v2

    sparse-switch v0, :sswitch_data_334

    goto :goto_217

    :sswitch_21f
    if-ge v5, v1, :cond_225

    const v0, 0xcde0

    goto :goto_217

    :cond_225
    :sswitch_225
    const v0, 0xcdc1

    goto :goto_217

    :sswitch_229
    invoke-virtual {v8, v5}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v3

    const-string v0, "1A0C102E0F33"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v1, "1A0C102E163E0F"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v3, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    const-string v1, "1A0C102E08360106"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v3, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v9, "1A0C102E14320102061A15"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    invoke-virtual {v3, v9}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    invoke-static/range {v0 .. v6}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOoOoOo0oOo0o0oO;->oOoOoOoOoOoOoO0o(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/ArrayList;II)I

    move-result v5

    const v0, 0xcdff

    :goto_25c
    const v1, 0xce10

    xor-int/2addr v0, v1

    sparse-switch v0, :sswitch_data_346

    goto :goto_25c

    :sswitch_264
    const v0, 0xce1e

    goto :goto_25c

    :sswitch_268
    invoke-virtual {v7, v4}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;->OoOoOo0oO0oOoO0O(Ljava/util/List;)Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;

    invoke-virtual {v7}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;->toString()Ljava/lang/String;

    move-result-object v0

    return-object v0

    :sswitch_data_270
    .sparse-switch
        0xe -> :sswitch_e
        0x31 -> :sswitch_11
        0xcc -> :sswitch_16
        0xef -> :sswitch_2d
    .end sparse-switch

    :sswitch_data_282
    .sparse-switch
        0x11 -> :sswitch_22
        0x36 -> :sswitch_27
        0x1d7 -> :sswitch_2d
        0x1f4 -> :sswitch_2a
    .end sparse-switch

    :sswitch_data_294
    .sparse-switch
        0x11 -> :sswitch_3f
        0xb918 -> :sswitch_73
        0xb939 -> :sswitch_49
        0xb97b -> :sswitch_45
    .end sparse-switch

    :sswitch_data_2a6
    .sparse-switch
        0xe -> :sswitch_54
        0xef -> :sswitch_6f
    .end sparse-switch

    :sswitch_data_2b0
    .sparse-switch
        0x16 -> :sswitch_6b
        0x35 -> :sswitch_b2
        0x1f7 -> :sswitch_81
        0x7eef -> :sswitch_87
    .end sparse-switch

    :sswitch_data_2c2
    .sparse-switch
        0x11 -> :sswitch_94
        0x32 -> :sswitch_98
    .end sparse-switch

    :sswitch_data_2cc
    .sparse-switch
        0x12 -> :sswitch_ae
        0x33 -> :sswitch_f3
        0x54 -> :sswitch_c6
        0xf1 -> :sswitch_c0
    .end sparse-switch

    :sswitch_data_2de
    .sparse-switch
        0x1f1 -> :sswitch_d3
        0x6af -> :sswitch_d7
    .end sparse-switch

    :sswitch_data_2e8
    .sparse-switch
        0x13 -> :sswitch_ed
        0x2d -> :sswitch_132
        0x32 -> :sswitch_101
        0x4c -> :sswitch_105
    .end sparse-switch

    :sswitch_data_2fa
    .sparse-switch
        0x12 -> :sswitch_112
        0xf3 -> :sswitch_12e
    .end sparse-switch

    :sswitch_data_304
    .sparse-switch
        0x11 -> :sswitch_128
        0x36 -> :sswitch_140
        0x57 -> :sswitch_1c6
        0x74 -> :sswitch_144
    .end sparse-switch

    :pswitch_data_316
    .packed-switch 0xe
        :pswitch_14f  #0000000e
        :pswitch_14e  #0000000f
        :pswitch_14e  #00000010
        :pswitch_1c2  #00000011
    .end packed-switch

    :sswitch_data_322
    .sparse-switch
        0xf1 -> :sswitch_1bc
        0x7ab -> :sswitch_1d4
        0x7c8 -> :sswitch_210
        0x7e9 -> :sswitch_1d8
    .end sparse-switch

    :sswitch_data_334
    .sparse-switch
        0x17 -> :sswitch_21f
        0x36 -> :sswitch_225
        0x55 -> :sswitch_268
        0x74 -> :sswitch_229
    .end sparse-switch

    :sswitch_data_346
    .sparse-switch
        0xe -> :sswitch_210
        0x3ef -> :sswitch_264
    .end sparse-switch
.end method

.method public detailContent(Ljava/util/List;)Ljava/lang/String;
    .registers 13
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/util/List",
            "<",
            "Ljava/lang/String;",
            ">;)",
            "Ljava/lang/String;"
        }
    .end annotation

    const/4 v0, 0x0

    const-string v9, "B7C6AFD0BDF4"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v2, v0

    move-object v3, v0

    move-object v1, v0

    move-object v4, v0

    move-object v5, v0

    move-object v6, v0

    move-object v7, v0

    move-object v8, v0

    :goto_f
    invoke-static {v9}, Lcom/github/catvod/spider/merge/oOoOoOoOoO0oOo0o/ۣ۟ۢۤ۟;->۟ۥۦ۠۟(Ljava/lang/Object;)I

    move-result v0

    sparse-switch v0, :sswitch_data_18c

    invoke-direct {p0}, Lcom/github/catvod/spider/Wexkoukou2;->oOoOoOoOoOoOoO0o()Ljava/util/Map;

    move-result-object v0

    const-string v9, "B7C1AFEEBDF7"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v3, v0

    goto :goto_f

    :sswitch_22
    const-string v0, "1A0C102E163B0D1A2B17143801"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v4, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7C6AFD2BDC8"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v8, v0

    goto :goto_f

    :sswitch_34
    const-string v0, "1A0C102E163B0D1A2B04143B"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v4, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7C4AFD1BDF2"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v7, v0

    goto :goto_f

    :sswitch_46
    invoke-static {v6}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOoOoOoOoOoOoO0o;->oOoOoOoOoOoOoO0o(Ljava/lang/String;)Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;

    move-result-object v0

    const-string v9, "B7C1AFD5BDFF"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v2, v0

    goto :goto_f

    :sswitch_52
    iget-object v0, p0, Lcom/github/catvod/spider/Wexkoukou2;->oOoOoOoOoOoOoO0o:Ljava/lang/String;

    const-string v9, "B7C5AFD3BDFF"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v8, v0

    goto :goto_f

    :sswitch_5c
    invoke-virtual {v2, v7}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;->oOoOoOo0O0O0oO0o(Ljava/lang/String;)V

    const-string v0, "B7C7AFD2BDF0"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    move-object v9, v0

    goto :goto_f

    :sswitch_67
    invoke-virtual {v2, v6}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;->oOoO0OoO0oOo0oOo(Ljava/lang/String;)V

    const-string v0, "B7CBAFEEBDF7"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    move-object v9, v0

    goto :goto_f

    :sswitch_72
    invoke-static {v7, v3}, Lcom/github/catvod/spider/merge/oOoOoO0oOo0oO0O0/oOo0oOo0Oo0oO0Oo;->oOoOoO0oOoO0OoOo(Ljava/lang/String;Ljava/util/Map;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7C4AFD6BDF1"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v8, v0

    goto :goto_f

    :sswitch_7e
    const-string v0, "1A0C102E0734180C06"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v4, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7C0AFD6BDF1"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v7, v0

    goto :goto_f

    :sswitch_90
    const-string v0, "1D12"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v6, "8AE9D497ECF7"

    invoke-static {v6}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v8, v0, v6}, Ljava/lang/String;->replaceAll(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7C3AFEEBDF6"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v6, v0

    goto/16 :goto_f

    :sswitch_a9
    const-string v0, "08020010"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v8, v0}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOoOoOo0oOo0o0oO;->oOoOoOo0oOo0o0oO(Ljava/lang/String;Ljava/lang/String;)Lorg/json/JSONObject;

    move-result-object v0

    const-string v9, "B7CBAFEEBDF1"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v4, v0

    goto/16 :goto_f

    :sswitch_bc
    const/4 v0, 0x0

    invoke-interface {p1, v0}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    const-string v0, "B7C0AFD1BDF6"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    move-object v9, v0

    goto/16 :goto_f

    :sswitch_ca
    invoke-static {v2}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;->OoOoOo0O0Oo0o0oO(Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7C5AFEEBDC8"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v8, v0

    goto/16 :goto_f

    :sswitch_d7
    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    const-string v9, "B7C5AFD4BDF6"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v5, v0

    goto/16 :goto_f

    :sswitch_e5
    const-string v0, "1A0C102E043B191116"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v4, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7C1AFD6BDC8"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v8, v0

    goto/16 :goto_f

    :sswitch_f8
    invoke-virtual {v2, v8}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;->OoOoOo0O0o0oO0o0(Ljava/lang/String;)V

    const-string v0, "B7C6AFD1BDF6"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    move-object v9, v0

    goto/16 :goto_f

    :sswitch_104
    invoke-virtual {v2, v7}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;->oOoOoOo0oOo0o0oO(Ljava/lang/String;)V

    const-string v0, "B7C4AFD0BDC8"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    move-object v9, v0

    goto/16 :goto_f

    :sswitch_110
    invoke-virtual {v2, v6}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;->oOoOo0O0Oo0o0OoO(Ljava/lang/String;)V

    const-string v0, "B7C6AFD6BDF2"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    move-object v9, v0

    goto/16 :goto_f

    :sswitch_11c
    const-string v0, "43020418482704135B10162743151D15033833071105073E005C1D155B"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v5, v8, v0, v6}, Lcom/github/catvod/spider/merge/oOoO0OoO0oOo0oOo/oOoOoOoOoOoOoO0o;->oOo0oOo0Oo0oO0Oo(Ljava/lang/StringBuilder;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7C1AFD4"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v7, v0

    goto/16 :goto_f

    :sswitch_12f
    invoke-virtual {v2, v7}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;->oOoOoO0oOoO0OoOo(Ljava/lang/String;)V

    const-string v0, "B7C6AFD4BDF0"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    move-object v9, v0

    goto/16 :goto_f

    :sswitch_13b
    const-string v0, "1A0C102E053B0D1007"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v4, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7FCAFD2BDF5"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v7, v0

    goto/16 :goto_f

    :sswitch_14e
    const-string v0, "1A0C102E08360106"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "1A0C102E163E0F"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    const-string v10, "1A0C102E1F320D11"

    invoke-static {v10}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v10

    invoke-static {v4, v0, v2, v9, v10}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOoO0o0oOo0oO0Oo;->oOoOoOo0oOo0o0oO(Lorg/json/JSONObject;Ljava/lang/String;Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoO0o0oOo0oO0Oo;Ljava/lang/String;Ljava/lang/String;)V

    const-string v0, "B7C5AFD1"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    move-object v9, v0

    goto/16 :goto_f

    :sswitch_16c
    const-string v0, "1A0C102E023E1E0617050925"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v4, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v9, "B7C6AFD1BDF3"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v6, v0

    goto/16 :goto_f

    :sswitch_17f
    move-object v0, v1

    check-cast v0, Ljava/lang/String;

    const-string v9, "B7FCAFEEBDF3"

    invoke-static {v9}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v9

    move-object v6, v0

    goto/16 :goto_f

    :sswitch_18b
    return-object v8

    :sswitch_data_18c
    .sparse-switch
        0xdcba -> :sswitch_13b
        0x1aa704 -> :sswitch_d7
        0x1aa77e -> :sswitch_104
        0x1aaac2 -> :sswitch_67
        0x1ab243 -> :sswitch_72
        0x1ab2e6 -> :sswitch_14e
        0x1ab33a -> :sswitch_f8
        0x1ab624 -> :sswitch_17f
        0x1ab702 -> :sswitch_5c
        0x1aba48 -> :sswitch_22
        0x1abda6 -> :sswitch_16c
        0x1abda9 -> :sswitch_110
        0x1abdc7 -> :sswitch_bc
        0x1abe01 -> :sswitch_90
        0x1abe47 -> :sswitch_ca
        0x1abe83 -> :sswitch_7e
        0x1ac146 -> :sswitch_18b
        0x1ac1ac -> :sswitch_11c
        0x1ac202 -> :sswitch_52
        0x1ac52c -> :sswitch_12f
        0x1ac545 -> :sswitch_e5
        0x1ac606 -> :sswitch_a9
        0x1ac8c9 -> :sswitch_34
        0x1ac8cf -> :sswitch_46
    .end sparse-switch
.end method

.method public homeContent(Z)Ljava/lang/String;
    .registers 11

    const/4 v8, 0x4

    const/4 v7, 0x3

    const/4 v6, 0x2

    const/4 v5, 0x1

    const/4 v0, 0x0

    new-instance v3, Ljava/util/ArrayList;

    invoke-direct {v3}, Ljava/util/ArrayList;-><init>()V

    new-array v1, v8, [Ljava/lang/String;

    const-string v2, "5D"

    invoke-static {v2}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    aput-object v2, v1, v0

    const-string v2, "5E"

    invoke-static {v2}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    aput-object v2, v1, v5

    const-string v2, "5F"

    invoke-static {v2}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    aput-object v2, v1, v6

    const-string v2, "58"

    invoke-static {v2}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    aput-object v2, v1, v7

    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v4

    new-array v1, v8, [Ljava/lang/String;

    const-string v2, "8BF7C194DBE6"

    invoke-static {v2}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    aput-object v2, v1, v0

    const-string v2, "8BF7C199C1D189EAD3"

    invoke-static {v2}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    aput-object v2, v1, v5

    const-string v2, "8BD8C899EFED"

    invoke-static {v2}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    aput-object v2, v1, v6

    const-string v2, "89E9DC97DAFC"

    invoke-static {v2}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    aput-object v2, v1, v7

    invoke-static {v1}, Ljava/util/Arrays;->asList([Ljava/lang/Object;)Ljava/util/List;

    move-result-object v5

    move v2, v0

    :goto_57
    invoke-interface {v4}, Ljava/util/List;->size()I

    move-result v1

    const/16 v0, 0x650

    :goto_5d
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_9a

    goto :goto_5d

    :cond_63
    :sswitch_63
    const/16 v0, 0x68e

    goto :goto_5d

    :sswitch_66
    if-ge v2, v1, :cond_63

    const/16 v0, 0x6ad

    goto :goto_5d

    :sswitch_6b
    new-instance v6, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOoOoOoOoO0o;

    invoke-interface {v4, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    invoke-interface {v5, v2}, Ljava/util/List;->get(I)Ljava/lang/Object;

    move-result-object v1

    check-cast v1, Ljava/lang/String;

    const/4 v7, 0x0

    invoke-direct {v6, v0, v1, v7}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOoOoOoOoO0o;-><init>(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V

    invoke-virtual {v3, v6}, Ljava/util/ArrayList;->add(Ljava/lang/Object;)Z

    add-int/lit8 v0, v2, 0x1

    const/16 v1, 0x6cc

    :goto_84
    xor-int/lit16 v1, v1, 0x6dd

    sparse-switch v1, :sswitch_data_ac

    goto :goto_84

    :sswitch_8a
    const/16 v1, 0x6eb

    goto :goto_84

    :sswitch_8d
    move v2, v0

    goto :goto_57

    :sswitch_8f
    const-string v0, "171E"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-static {v0, v3}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOoOoOo0O0O0oO0o;->oOo0oOo0Oo0oO0Oo(Ljava/lang/String;Ljava/util/ArrayList;)Ljava/lang/String;

    move-result-object v0

    return-object v0

    :sswitch_data_9a
    .sparse-switch
        0xe -> :sswitch_63
        0x31 -> :sswitch_66
        0xcc -> :sswitch_6b
        0xef -> :sswitch_8f
    .end sparse-switch

    :sswitch_data_ac
    .sparse-switch
        0x11 -> :sswitch_8a
        0x36 -> :sswitch_8d
    .end sparse-switch
.end method

.method public init(Landroid/content/Context;Ljava/lang/String;)V
    .registers 11

    const/4 v1, 0x0

    const-string v7, "B7C7AFD4BDF2"

    invoke-static {v7}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    move-object v0, v1

    move-object v2, v1

    move-object v3, v1

    move-object v4, v1

    move-object v5, v1

    move-object v6, v1

    :goto_d
    invoke-static {v7}, Lcom/github/catvod/spider/merge/oOoOoOoOoO0oOo0o/ۣ۟ۢۤ۟;->۟ۥۦ۠۟(Ljava/lang/Object;)I

    move-result v1

    sparse-switch v1, :sswitch_data_96

    invoke-static {v0, v6}, Lcom/wexfnw/libso/LoadNiMa;->decode(Landroid/content/Context;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v7, "B7C4AFD4BDF3"

    invoke-static {v7}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    move-object v5, v1

    goto :goto_d

    :sswitch_20
    const/4 v1, 0x1

    aget-object v1, v4, v1

    const-string v7, "B7C0AFD6BDF3"

    invoke-static {v7}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    move-object v6, v1

    goto :goto_d

    :sswitch_2b
    invoke-static {v5, v3}, Lcom/github/catvod/spider/merge/oOoOoO0oOo0oO0O0/oOo0oOo0Oo0oO0Oo;->oOoOoO0oOoO0OoOo(Ljava/lang/String;Ljava/util/Map;)Ljava/lang/String;

    move-result-object v1

    const-string v7, "B7C4AFEEBDF5"

    invoke-static {v7}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    move-object v6, v1

    goto :goto_d

    :sswitch_37
    invoke-direct {p0}, Lcom/github/catvod/spider/Wexkoukou2;->oOoOoOoOoOoOoO0o()Ljava/util/Map;

    move-result-object v1

    const-string v7, "B7FCAFD2BDF7"

    invoke-static {v7}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    move-object v3, v1

    goto :goto_d

    :sswitch_43
    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v7, "B7C7AFD7BDF0"

    invoke-static {v7}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    move-object v2, v1

    goto :goto_d

    :sswitch_50
    iput-object v6, p0, Lcom/github/catvod/spider/Wexkoukou2;->oOoOoOoOoOoOoO0o:Ljava/lang/String;

    const-string v1, "B7C3AFD7BDF4"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    move-object v7, v1

    goto :goto_d

    :sswitch_5a
    const-string v1, "43081B040D3819515B020F23094D041916"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-static {v2, v6, v1}, Lcom/github/catvod/spider/merge/oOoO0OoO0oOo0oOo/oOoOoOoOoOoOoO0o;->oOoOoOoOoOoOoO0o(Ljava/lang/StringBuilder;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v7, "B7C6AFD0BDC8"

    invoke-static {v7}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    move-object v5, v1

    goto :goto_d

    :sswitch_6c
    const-string v1, "301F280D3A2B"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v5, v1}, Ljava/lang/String;->split(Ljava/lang/String;)[Ljava/lang/String;

    move-result-object v1

    const-string v7, "B7CBAFD0BDF0"

    invoke-static {v7}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    move-object v4, v1

    goto :goto_d

    :sswitch_7e
    invoke-static {}, Lcom/github/catvod/spider/merge/OoOo0o0Oo0oO0o0o/oOoOo0O0Oo0o0OoO;->oOoOo0O0Oo0o0OoO()Landroid/content/Context;

    move-result-object v0

    const-string v1, "B7C7AFD9BDF3"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    move-object v7, v1

    goto :goto_d

    :sswitch_8a
    sget-object v1, Lcom/github/catvod/spider/Init;->OoOoO0o0oO0O0O0O:Ljava/lang/String;

    const-string v7, "B7C5AFD5BDF3"

    invoke-static {v7}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v7

    move-object v6, v1

    goto/16 :goto_d

    :sswitch_95
    return-void

    :sswitch_data_96
    .sparse-switch
        0x1aa77c -> :sswitch_2b
        0x1aab9d -> :sswitch_95
        0x1ab700 -> :sswitch_50
        0x1aba84 -> :sswitch_7e
        0x1abaa5 -> :sswitch_8a
        0x1abae0 -> :sswitch_43
        0x1abdc3 -> :sswitch_37
        0x1ac1e6 -> :sswitch_5a
        0x1ac5c6 -> :sswitch_6c
        0x1ac90e -> :sswitch_20
    .end sparse-switch
.end method

.method public playerContent(Ljava/lang/String;Ljava/lang/String;Ljava/util/List;)Ljava/lang/String;
    .registers 13
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/String;",
            "Ljava/lang/String;",
            "Ljava/util/List",
            "<",
            "Ljava/lang/String;",
            ">;)",
            "Ljava/lang/String;"
        }
    .end annotation

    const/4 v1, 0x0

    const-string v8, "B7C2AFD6BDF3"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v0, v1

    move-object v2, v1

    move-object v3, v1

    move-object v4, v1

    move-object v5, v1

    move-object v6, v1

    move-object v7, v1

    :goto_e
    invoke-static {v8}, Lcom/github/catvod/spider/merge/oOoOoOoOoO0oOo0o/ۣ۟ۢۤ۟;->۟ۥۦ۠۟(Ljava/lang/Object;)I

    move-result v1

    sparse-switch v1, :sswitch_data_102

    new-instance v1, Ljava/lang/StringBuilder;

    invoke-direct {v1}, Ljava/lang/StringBuilder;-><init>()V

    const-string v8, "B7C4AFEEBDC8"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v2, v1

    goto :goto_e

    :sswitch_22
    new-instance v1, Lorg/json/JSONObject;

    invoke-direct {v1, p2}, Lorg/json/JSONObject;-><init>(Ljava/lang/String;)V

    const-string v8, "B7C5AFD0BDFF"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v3, v1

    goto :goto_e

    :sswitch_2f
    invoke-virtual {v0, v6}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;->OoOo0o0Oo0oO0o0o(Ljava/lang/String;)Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;

    const-string v1, "B7C5AFD2BDF3"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    move-object v8, v1

    goto :goto_e

    :sswitch_3a
    invoke-virtual {v0, v5}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;->oOoOo0O0Oo0o0OoO(Ljava/util/Map;)Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;

    const-string v1, "B7C7AFEEBDF0"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    move-object v8, v1

    goto :goto_e

    :sswitch_45
    const-string v1, "191118"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v3, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v8, "B7C0AFD9BDF4"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v6, v1

    goto :goto_e

    :sswitch_57
    const-string v1, "391011034B160B061A05"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v8, "210C0E180A3B0D4C415F5677440A241909390958543236024C0A2419093909433B2246665A3C44510A3E0706543C07344C2C27513E7E4C2204010A323B06163A0F23435544444866425241514E1C2437393D4A77000A1F14461009001F1E4F772F111D3E357855555A4148635A55405F53644C2E1B130F3B094C45442366585B542207310D111D5E5067584D45"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    invoke-virtual {v5, v1, v8}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    const-string v1, "B7C1AFD5BDF7"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    move-object v8, v1

    goto :goto_e

    :sswitch_6e
    new-instance v1, Ljava/util/HashMap;

    invoke-direct {v1}, Ljava/util/HashMap;-><init>()V

    const-string v8, "B7FCAFD0BDFF"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v5, v1

    goto :goto_e

    :sswitch_7b
    invoke-virtual {v0}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;->toString()Ljava/lang/String;

    move-result-object v1

    const-string v8, "B7C4AFD4"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v7, v1

    goto :goto_e

    :sswitch_87
    new-instance v0, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;

    invoke-direct {v0}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;-><init>()V

    const-string v1, "B7FCAFD4BDF2"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    move-object v8, v1

    goto/16 :goto_e

    :sswitch_95
    const-string v1, "43081B040D38194C1E09482704134B04143B51"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-static {v2, v7, v1, p2}, Lcom/github/catvod/spider/merge/oOoO0OoO0oOo0oOo/oOoOoOoOoOoOoO0o;->oOo0oOo0Oo0oO0Oo(Ljava/lang/StringBuilder;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v8, "B7CBAFD3BDF2"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v6, v1

    goto/16 :goto_e

    :sswitch_a8
    invoke-static {v4, v7}, Lcom/wexfnw/libso/LoadNiMa;->decode(Landroid/content/Context;Ljava/lang/String;)Ljava/lang/String;

    move-result-object p2

    const-string v1, "B7C2AFD5BDF6"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    move-object v8, v1

    goto/16 :goto_e

    :sswitch_b5
    const-string v1, "391011034B160B061A05"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v8, "210C0E180A3B0D4C415F5677440A241909390958543236024C0A2419093909433B2246665A3C44510A3E0706543C07344C2C27513E7E4C2204010A323B06163A0F23435544444866425241514E1C2437393D4A77000A1F14461009001F1E4F772F111D3E357855555A4148635A55405F53644C2E1B130F3B094C45442366585B542207310D111D5E5067584D45"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    invoke-virtual {v5, v1, v8}, Ljava/util/HashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    const-string v1, "B7C0AFD5BDFF"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    move-object v8, v1

    goto/16 :goto_e

    :sswitch_cd
    sget-object v1, Lcom/github/catvod/spider/Init;->OoOoO0o0oO0O0O0O:Ljava/lang/String;

    const-string v8, "B7CBAFD1"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v7, v1

    goto/16 :goto_e

    :sswitch_d8
    invoke-static {v6, v5}, Lcom/github/catvod/spider/merge/oOoOoO0oOo0oO0O0/oOo0oOo0Oo0oO0Oo;->oOoOoO0oOoO0OoOo(Ljava/lang/String;Ljava/util/Map;)Ljava/lang/String;

    move-result-object v1

    const-string v8, "B7C6AFD2BDF5"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v7, v1

    goto/16 :goto_e

    :sswitch_e5
    new-instance v1, Ljava/util/HashMap;

    invoke-direct {v1}, Ljava/util/HashMap;-><init>()V

    const-string v8, "B7C3AFD5BDF7"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v5, v1

    goto/16 :goto_e

    :sswitch_f3
    invoke-static {}, Lcom/github/catvod/spider/merge/OoOo0o0Oo0oO0o0o/oOoOo0O0Oo0o0OoO;->oOoOo0O0Oo0o0OoO()Landroid/content/Context;

    move-result-object v1

    const-string v8, "B7FCAFD1BDF3"

    invoke-static {v8}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v8

    move-object v4, v1

    goto/16 :goto_e

    :sswitch_100
    return-object v7

    nop

    :sswitch_data_102
    .sparse-switch
        0xdcde -> :sswitch_100
        0xdcf8 -> :sswitch_95
        0x1aa723 -> :sswitch_a8
        0x1aa746 -> :sswitch_b5
        0x1aa7bf -> :sswitch_45
        0x1aab5c -> :sswitch_57
        0x1aaf1e -> :sswitch_22
        0x1ab2de -> :sswitch_3a
        0x1ab6a7 -> :sswitch_d8
        0x1ab71e -> :sswitch_2f
        0x1ab9cc -> :sswitch_7b
        0x1abe04 -> :sswitch_f3
        0x1ac18d -> :sswitch_87
        0x1ac1c7 -> :sswitch_e5
        0x1ac507 -> :sswitch_cd
        0x1ac92b -> :sswitch_6e
    .end sparse-switch
.end method

.method public searchContent(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;
    .registers 11

    new-instance v4, Ljava/util/ArrayList;

    invoke-direct {v4}, Ljava/util/ArrayList;-><init>()V

    new-instance v0, Ljava/lang/StringBuilder;

    invoke-direct {v0}, Ljava/lang/StringBuilder;-><init>()V

    iget-object v1, p0, Lcom/github/catvod/spider/Wexkoukou2;->oOoOoOoOoOoOoO0o:Ljava/lang/String;

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v1, "43020418482704135B101627431011101434045C00141E2351"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-static {p1}, Ljava/net/URLEncoder;->encode(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    const-string v1, "4A13134C"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v0, v1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0, p2}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {v0}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0}, Lcom/github/catvod/spider/Wexkoukou2;->oOoOoOoOoOoOoO0o()Ljava/util/Map;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/merge/oOoOoO0oOo0oO0O0/oOo0oOo0Oo0oO0Oo;->oOoOoO0oOoO0OoOo(Ljava/lang/String;Ljava/util/Map;)Ljava/lang/String;

    move-result-object v0

    const-string v1, "000A0705"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-static {v0, v1}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOo0oOo0Oo0oO0Oo;->oOo0oOo0Oo0oO0Oo(Ljava/lang/String;Ljava/lang/String;)Lorg/json/JSONArray;

    move-result-object v7

    const/4 v5, 0x0

    :sswitch_42
    invoke-virtual {v7}, Lorg/json/JSONArray;->length()I

    move-result v1

    const/16 v0, 0x650

    :goto_48
    xor-int/lit16 v0, v0, 0x661

    sparse-switch v0, :sswitch_data_98

    goto :goto_48

    :cond_4e
    :sswitch_4e
    const/16 v0, 0x68e

    goto :goto_48

    :sswitch_51
    if-ge v5, v1, :cond_4e

    const/16 v0, 0x6ad

    goto :goto_48

    :sswitch_56
    invoke-virtual {v7, v5}, Lorg/json/JSONArray;->getJSONObject(I)Lorg/json/JSONObject;

    move-result-object v3

    const-string v0, "1A0C102E0F33"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {v3, v0}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    const-string v1, "1A0C102E163E0F"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v3, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v2

    const-string v1, "1A0C102E08360106"

    invoke-static {v1}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    invoke-virtual {v3, v1}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v1

    const-string v6, "1A0C102E14320102061A15"

    invoke-static {v6}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v6

    invoke-virtual {v3, v6}, Lorg/json/JSONObject;->getString(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v3

    const/4 v6, 0x1

    invoke-static/range {v0 .. v6}, Lcom/github/catvod/spider/merge/oOoOoO0Oo0oO0o0O/oOoOoOo0oOo0o0oO;->oOoOoOoOoOoOoO0o(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/ArrayList;II)I

    move-result v5

    const/16 v0, 0x6cc

    :goto_89
    xor-int/lit16 v0, v0, 0x6dd

    sparse-switch v0, :sswitch_data_aa

    goto :goto_89

    :sswitch_8f
    const/16 v0, 0x6eb

    goto :goto_89

    :sswitch_92
    invoke-static {v4}, Lcom/github/catvod/spider/merge/OoOoOo0O0o0oO0o0/oOoOoOo0oOo0o0oO;->OoOoO0o0oO0O0O0O(Ljava/util/List;)Ljava/lang/String;

    move-result-object v0

    return-object v0

    nop

    :sswitch_data_98
    .sparse-switch
        0xe -> :sswitch_4e
        0x31 -> :sswitch_51
        0xcc -> :sswitch_56
        0xef -> :sswitch_92
    .end sparse-switch

    :sswitch_data_aa
    .sparse-switch
        0x11 -> :sswitch_8f
        0x36 -> :sswitch_42
    .end sparse-switch
.end method

.method public searchContent(Ljava/lang/String;Z)Ljava/lang/String;
    .registers 4

    const-string v0, "5D"

    invoke-static {v0}, Lcom/github/catvod/spider/merge/rlM;->d(Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    invoke-virtual {p0, p1, v0}, Lcom/github/catvod/spider/Wexkoukou2;->searchContent(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method

.method public searchContent(Ljava/lang/String;ZLjava/lang/String;)Ljava/lang/String;
    .registers 5

    invoke-virtual {p0, p1, p3}, Lcom/github/catvod/spider/Wexkoukou2;->searchContent(Ljava/lang/String;Ljava/lang/String;)Ljava/lang/String;

    move-result-object v0

    return-object v0
.end method
