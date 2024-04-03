package memo.bean;

import lombok.Data;

@Data
public class MemoSaveDTO {
    private String content;
    private Status status;
}
