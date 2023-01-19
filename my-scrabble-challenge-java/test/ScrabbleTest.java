import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import jdk.nashorn.internal.ir.annotations.Ignore;

public class ScrabbleTest {

    @Test
    public void returnsZeroForEmptyWords() {
        Scrabble scrabble = new Scrabble("");
        assertEquals(scrabble.score(), 0);
    }

    @Test
    @Ignore
    public void returnsZeroForNull() {
        Scrabble scrabble = new Scrabble(null);
        assertEquals(scrabble.score(), 0);
    }

    @Test
    @Ignore
    public void returnsScoreForShortWord1() {
        Scrabble scrabble = new Scrabble("a");
        assertEquals(scrabble.score(), 1);
    }

    @Test
    @Ignore
    public void returnsScoreForShortWord2() {
        Scrabble scrabble = new Scrabble("f");
        assertEquals(scrabble.score(), 4);
    }

    @Test
    @Ignore
    public void returnsScoreForSimpleWord() {
        Scrabble scrabble = new Scrabble("street");
        assertEquals(scrabble.score(), 6);
    }

    @Test
    @Ignore
    public void returnsScoreForComplicatedWord() {
        Scrabble scrabble = new Scrabble("quirky");
        assertEquals(scrabble.score(), 22);
    }

    @Test
    @Ignore
    public void returnsScoreForCaseInsensitiveWord() {
        Scrabble scrabble = new Scrabble("OXYPHENBUTAZONE");
        assertEquals(scrabble.score(), 41);
    }
}
