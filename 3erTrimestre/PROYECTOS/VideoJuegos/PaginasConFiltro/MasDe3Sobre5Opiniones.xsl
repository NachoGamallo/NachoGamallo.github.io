<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <link rel="stylesheet" href="../style.css"/>
            <body>
                <h3>COLECCION DE VIDEOJUEGOS</h3>
                <table>
                    <tr>
                        <th>TITULO</th>
                        <th>GENERO</th>
                        <th>AUTOR</th>
                        <th>FECHA</th>
                        <th>NOTA (0/5)</th>
                        <th>TEXTO</th> 
                    </tr>
                    <xsl:for-each select="videojuegos/videojuego/opiniones/opinion[nota &gt; 3]">
                        <tr>
                            <th><xsl:value-of select="../../titulo"/></th>
                            <th><xsl:value-of select="../../genero"/></th>
                            <th><xsl:value-of select="autor"/></th>
                            <th><xsl:value-of select="fecha"/></th>
                            <th><xsl:value-of select="nota"/></th>
                            <th><xsl:value-of select="texto"/></th>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>